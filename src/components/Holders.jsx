import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { useFonts } from "expo-font";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";

const Holders = ({ icon, title }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const [fontsLoaded] = useFonts({
    Raleway_700Bold   
  })

if(!fontsLoaded) {
  return (
    <View style={[styles.box, { borderColor }]}>

    </View>
  )
}


  const borderColor = isChecked ? "#0AC17F" : "#B4B4B4"; // Border color changes based on the checkbox state
  const svgColor = isChecked ? "#0AC17F" : "#000"; // SVG color changes based on the checkbox state
  const textColor = isChecked ? "#0AC17F" : "#000";

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleCheckbox}>
        <View style={[styles.box, { borderColor }]}>
        {React.cloneElement(icon, { stroke: isChecked ? "#0AC17F" : "" })}
          <Text style={[styles.text, {color: textColor }]}>{title}</Text>
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
  },
  text: {
    fontSize: 18,
    fontFamily: "Raleway_700Bold",
    textTransform: "capitalize",
    lineHeight: 27,
    letterSpacing: .5,
  },
});

export default Holders;
