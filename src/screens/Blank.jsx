import React, { useEffect } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { navigate } from "../Navigation/Navigation";
const BlankScreen = () => {
  const navigation = useNavigation(); // Get the navigation object

  useEffect(() => {
    // Add a delay to automatically navigate to another screen after 3 seconds
    const timeout = setTimeout(() => {
      navigate("Logo-Screen"); // Navigate to the "Logo-Screen"
    }, 2500); // 3000 milliseconds (3 seconds)

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BlankScreen;
