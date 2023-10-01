import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useFonts, Raleway_600SemiBold, Raleway_800ExtraBold } from "@expo-google-fonts/raleway";

export default function Verification() {
  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_800ExtraBold,
  });

  const inputRefs = useRef([]); // Array of refs for OTP input fields
  const [otp, setOTP] = useState(['', '', '', '', '']);

  // Function to handle OTP input
  const handleInputChange = (value, index) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    setOTP(updatedOTP);
    
    // Focus on the next input field if available
    if (index < inputRefs.current.length - 1 && value.length === 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.otpContainer}>
          {otp.map((part, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.otpInput}
              maxLength={1}
              value={part}
              onChangeText={(value) => handleInputChange(value, index)}
              keyboardType="numeric"
            />
          ))}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 24,
    alignItems: "center",
  },
  verificationText: {
    fontFamily: "Raleway_600SemiBold",
    fontSize: 16,
    color: "#B4B4B4",
    marginBottom: 8,
  },
  verificationHeader: {
    fontFamily: "Raleway_800ExtraBold",
    fontSize: 28,
    color: "black",
    lineHeight: 36,
    textTransform: "capitalize",
    marginBottom: 24,
  },
  verificationText1: {
    fontFamily: "Raleway_600SemiBold",
    fontSize: 16,
    color: "#B4B4B4",
    marginBottom: 24,
  },
  number: {
    fontFamily: "Raleway_600SemiBold",
    fontSize: 16,
    color: "black",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 6
  },
  otpInput: {
    width: 60,
    height: 60,
    fontSize: 24,
    borderWidth: 1,
    borderColor: "#B4B4B4",
    textAlign: "center",
    borderRadius: 8,
    margin: 5
  },
});
