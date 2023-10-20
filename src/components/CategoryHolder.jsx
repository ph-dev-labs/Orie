import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Raleway_500Medium } from "@expo-google-fonts/raleway";

const CategoryHolder = ({ text, style }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CategoryHolder;

const styles = StyleSheet.create({
    btn: {
        height: 31,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#B4B4B4",
        margin: 5,
        flexDirection: "column",
        justifyContent: "center",
        width: "fit-content", // Set the width to "fit-content"
      },
  text: {
    fontFamily: "Raleway_500Medium",
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "center",
    padding: 6

  },
});
