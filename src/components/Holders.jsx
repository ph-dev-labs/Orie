import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { useFonts } from "expo-font";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";

const Holders = ({ icon, title, selected, onPress, activeStyle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    if (onPress) {
      onPress();
    }
  };

  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={styles.box}></View>;
  }

  const containerStyle = {
    ...styles.box,
    borderColor: selected ? activeStyle.borderColor(title) : styles.box.borderColor,
  };

  const textStyle = {
    ...styles.text,
    color: selected ? activeStyle.textColor(title) : styles.text.color,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleCheckbox}>
        <View style={containerStyle}>
          {React.cloneElement(icon)}
          <Text style={textStyle}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 163,
    width: 163,
    borderWidth: 2, // Border width
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Background color
    margin: 35,
    borderColor: "#B4B4B4", // Default border color
  },
  text: {
    fontSize: 18,
    fontFamily: "Raleway_700Bold",
    textTransform: "capitalize",
    lineHeight: 27,
    letterSpacing: 0.5,
    color: "#000", // Default text color
  },
});

export default Holders;
