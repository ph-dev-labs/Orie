import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import CustomInputField from "../components/inputField";
import Vector9 from "../../assets/Vector9.svg";
import {
  Raleway_400Regular,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";

const suggestions = [
  "apple",
  "banana",
  "orange",
  "pear",
  "grape",
  "pineapple",
  "strawberry",
  "watermelon",
  "melon",
  "kiwi",
  "blueberry",
];

const getFilteredSuggestions = (text) => {
  return suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(text.toLowerCase())
  );
};
const Searchscreen = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleSearch = (text) => {
    setSearchField(text);
    const filtered = getFilteredSuggestions(text);
    setFilteredSuggestions(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.header}>Search for farmer or product</Text>
        <View style={styles.inputContainer}>
          <CustomInputField onChangeText={handleSearch} value={searchField} />
          {filteredSuggestions.map((suggestion, index) => (
            <View style={styles.suggestionContainer} key={index}>
              <Text key={index} style={styles.suggestion}>
                {suggestion}
              </Text>
              <Vector9 />
            </View>
          ))}
        </View>
        {/* Other components for search input, history, or results can be added here */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    alignItems: "center",
  },
  searchContainer: {
    margin: 10,
    flex: 1,
    width: "100%",
  },
  inputContainer: {
    width: "100%",
  },
  suggestionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },
  suggestion: {
    fontFamily: "Raleway_400Regular",
    fontSize: 16,
    padding: 6,
  },
  vectorIcon: {
    // Add styles for your vector or icon here
    // Example: width, height, color, etc.
  },
  header: {
    fontFamily: "Raleway_800ExtraBold",
    fontSize: 20,
    textTransform: "capitalize",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Searchscreen;
