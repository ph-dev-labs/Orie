import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Raleway_600SemiBold } from "@expo-google-fonts/raleway";
import { useNavigation } from "@react-navigation/native";
import SplitField from "../components/SplitField";
import CustomButton from "../components/CustomBtn";
import { setOtp } from "../Redux/Auth/registerSlice";
import { useDispatch } from "react-redux";

const Verification = () => {
  // Initialize OTP with empty strings
  const [otp, setOTP] = useState(["", "", "", "", ""]);
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const handleNavigation = () => {
    // Dispatch the OTP to the Redux store
    dispatch(setOtp(otp));
    navigate.navigate("Create-Password");
  };

  const handleInputChange = (text, index) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = text;
    setOTP(updatedOTP);
  };
  

  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.verificationText}>Verification</Text>
        <Text style={styles.verificationHeader}>Enter verification code</Text>
        <Text style={styles.verificationText1}>
          Enter the code we sent to{" "}
          <Text style={styles.number}>0990938848</Text>
        </Text>
        <View style={styles.otp}>
          <SplitField otp={otp} handleInputChange={handleInputChange} />
          <Text style={styles.text3}>
            Didn't get a code <Text style={styles.brand}>Resend in 59s</Text>
          </Text>
        </View>
      </View>

      <CustomButton text="Continue" onPress={handleNavigation} />
    </SafeAreaView>
  );
};

export default Verification;

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
    fontFamily: "Raleway_600SemiBold",
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
