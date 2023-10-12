import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Raleway_600SemiBold } from "@expo-google-fonts/raleway";
import { useNavigation } from "@react-navigation/native";
import SplitField from "../components/SplitField";
import CustomButton from "../components/CustomBtn";
import { setOtp } from "../Redux/Auth/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import AsyncHolder from "../components/AsyncHolder";
import { useConfirmOtpMutation } from "../Redux/Services/AuthAPi";
import { TouchableOpacity } from "react-native";

const Verification = () => {
  // Initialize OTP with empty strings
  const [otp, setOTP] = useState(["", "", "", "", ""]);
  const [visible, setVisble] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [confirmOtp] = useConfirmOtpMutation();
  const [countdown, setCountdown] = useState(60); // Initial countdown time in seconds
  const [isCounting, setIsCounting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const stringOtp = otp.join("");

  const startCountdown = () => {
    setIsCounting(true);
    setCountdown(60);
  };

  startCountdown();
  const resetCountdown = () => {
    setIsCounting(false);
  };

  useEffect(() => {
    let timer;

    if (isCounting) {
      timer = setInterval(() => {
        if (countdown > 0) {
          setCountdown(countdown - 1);
        } else {
          setIsCounting(false);
          clearInterval(timer);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [countdown, isCounting]);

  const handleVerification = async () => {
    const payload = {
      email: email,
      otp: stringOtp,
    };
    setIsLoading(true);
    const response = await confirmOtp(payload).unwrap();

    try {
      if (response.status === 200) {
        setIsLoading(false);
        setVisble(true);
        setTimeout(() => {
          setVisble(false);
          navigate.navigate("Login");
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (text, index) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = text;
    setOTP(updatedOTP);
  };

  const email = useSelector((state) => state.registration.email);
  const number = useSelector((state) => state.registration.number);
  const displayText = email !== "" ? email : number;
  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
  });

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Loader />
      </SafeAreaView>
    );
  }

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
          <SplitField otp={otp} handleInputChange={handleInputChange} />
          <TouchableOpacity disabled={isCounting}>
            <Text style={styles.text3}>
              Didn't get a code{" "}
              <Text style={styles.brand}>
                {isCounting
                  ? `click to resend otp in ${countdown}`
                  : "click to resend otp"}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <CustomButton text="Finish registration" onPress={handleVerification} />
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
    alignItems: "center",
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
