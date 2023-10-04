import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  Raleway_600SemiBold,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";
import SplitField from "../components/SplitField";
import CustomButton from "../components/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import { setOtp } from "../Redux/Auth/registerSlice";
import { useDispatch } from "react-redux";

const VerificationEmail = () => {
  const [otp, setOTP] = useState(["", "", "", "", ""]); // Initialize with empty strings

  const dispatch = useDispatch();
  const navigate = useNavigation();
  const handleNavigation = () => {
    dispatch(setOtp(otp));
    navigate.navigate("Create-Password");
  };

  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
  });

  const handleInputChange = (text, index) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = text;
    setOTP(updatedOTP);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.verificationText}>Verification</Text>
        <Text style={styles.verificationHeader}>Enter verification code</Text>
        <Text style={styles.verificationText1}>
          Enter the code we sent to{" "}
          <Text style={styles.number}>example@email.com</Text>
        </Text>
        <View style={styles.otp}>
          <SplitField otp={otp} handleInputChange={handleInputChange} />
          <Text style={styles.text3}>
            Didn't get a code <Text style={styles.brand}>Resend in 59s</Text>
          </Text>
        </View>
      </View>

      <CustomButton text="continue" onPress={handleNavigation} />
    </SafeAreaView>
  );
};

export default VerificationEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  otp: {
    marginTop: 30,
    flexDirection: "column",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  verificationText: {
    fontFamily: "Raleway_600SemiBold",
    fontSize: 16,
    lineHeight: 23,
    color: "#B4B4B4",
    textAlign: "center",
  },
  verificationText1: {
    fontFamily: "Raleway_600SemiBold",
    fontSize: 16,
    lineHeight: 23,
    color: "#B4B4B4",
  },

  number: {
    fontFamily: "Raleway_600SemiBold",
    fontSize: 12,
    lineHeight: 18,
    color: "black",
  },

  verificationHeader: {
    fontFamily: "Raleway_800ExtraBold",
    fontSize: 28,
    color: "black",
    lineHeight: 46,
    marginTop: 60,
    textTransform: "capitalize",
  },
  brand: {
    color: "#0AC17F",
  },
  text3: {
    fontFamily: "Raleway_600SemiBold",
    color: "black",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
});
