import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Raleway_600SemiBold } from "@expo-google-fonts/raleway";
import { useNavigation } from "@react-navigation/native";
import SplitField from "../components/SplitField";
import CustomButton from "../components/CustomBtn";
import { setOtp } from "../Redux/Auth/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { confirmOtpAsync } from "../Redux/Auth/registerSlice";

const Verification = () => {
  // Initialize OTP with empty strings
  const [otpField, setOtpField] = useState(["", "", "", "", ""]);
  const dispatch = useDispatch();
  const navigate = useNavigation();  
  const email = useSelector((state) => state.registration.email)
  const number = useSelector((state) => state.registration.number)
  const otp = useSelector((state) => state.registration.otp)
  const stringOtp = otpField.join("")

 
  const handleInputChange = (text, index) => {
    const updatedOTP = [...otpField];
    updatedOTP[index] = text;
    setOtpField(updatedOTP);
  };


  const displayText = email !== '' ? email : number;
  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
  });

  const handleOtp = async () => {
    dispatch(setOtp(stringOtp));
  
    try {
      const result = await confirmOtpAsync(otp, email);
  
      if (result && result.status === 200) {
        // OTP confirmation was successful
        console.log("OTP confirmed successfully");
        // Navigate to the next screen or perform any other actions as needed
      } else {
        // Handle OTP confirmation failure based on status code or error message
        console.error("OTP confirmation failed");
        // Set an error message or perform error handling as necessary
      }
    } catch (error) {
      console.error(error);
      // Handle any other errors that might occur during OTP confirmation
    }
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.verificationText}>Verification</Text>
        <Text style={styles.verificationHeader}>Enter verification code</Text>
        <Text style={styles.verificationText1}>
          Enter the code we sent to{" "}
          <Text style={styles.number}>{displayText}</Text>
        </Text>
        <View style={styles.otp}>
          <SplitField otp={otpField} handleInputChange={handleInputChange} />
          <Text style={styles.text3}>
            Didn't get a code <Text style={styles.brand}>Resend in 59s</Text>
          </Text>
        </View>
      </View>

      <CustomButton text="Finish registration" onPress={handleOtp} />
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
    alignItems: "center"
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
