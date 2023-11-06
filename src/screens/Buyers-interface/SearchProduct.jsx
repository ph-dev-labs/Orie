import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import Back from "../../../assets/back.svg";
import { TouchableOpacity, FlatList } from "react-native";
import CustomInputField from "../../components/inputField";
import Filter from "../../../assets/Filter.svg";
import CheckoutItem from "../../components/CheckoutItem";

const SearchProduct = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numColumns = 2;
  const windowWidth = Dimensions.get("window").width;

  const renderGridItem = () => {
    return <CheckoutItem style={styles.checkoutitem} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.holder}>
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Back />
          </TouchableOpacity>
        </View>
        <View style={styles.inputHolder}>
          <View style={styles.input}>
            <CustomInputField />
          </View>
          <View style={styles.icon}>
            <Filter />
          </View>
        </View>
        <View>
          <Text style={styles.categoryText}>
            Showing search results for ‘Yam’
          </Text>
          <Text style={styles.text}>We found 22 results</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderGridItem}
          keyExtractor={(item) => item.toString()}
          numColumns={numColumns}
          columnWrapperStyle={{
            // Calculate the width of each grid item dynamically based on screen width
            marginHorizontal: windowWidth * 0.02, // Adjust as needed
            width:
              (windowWidth - (numColumns + 1) * (windowWidth * 0.02)) /
              numColumns,
          }}
          contentContainerStyle={styles.gridContainer}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 24,
    flexDirection: "column",
  },
  holder: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#B4B4B4",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  inputHolder: {
    width: "100%",
    alignSelf: "center",
    margin: 10,
    flexDirection: "row",
  },
  icon: {
    height: 40,
    transform: [{ translateX: -40 }],
  },
  input: {
    width: "100%",
    position: "relative",
    alignSelf: "center",
  },
  categoryText: {
    fontFamily: "Raleway_600SemiBold",
    fontSize: 18,
    lineHeight: 25,
  },
  text: {
    fontFamily: "Raleway_600SemiBold",
    color: "#B4B4B4",
    fontSize: 14,
    lineHeight: 23,
    letterSpacing: 0.5,
  },
  gridContainer: {
    width: "100%",
    alignSelf: "flex-start"
  },
  checkoutitem: {
    transform: [{translateX: - 9.5}]
  }
});
