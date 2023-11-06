import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import Back from "../../assets/back.svg";
import { useFonts } from "expo-font";
import {
  Raleway_600SemiBold,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";
import CustomInputField from "../components/inputField";
import CustomButton from "../components/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setEmail } from "../Redux/Auth/resetPassword";
import { useForgotPasswordMutation } from "../Redux/Services/AuthAPi";
import Loader from "./Loader";

const Emailresp = () => {
  const navigate = useNavigation();
  const [emailField, setEmailField] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetPasswordApi] = useForgotPasswordMutation();
  const dispatch = useDispatch();
  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validateEmail = (text) => emailRegex.test(text);

  const handleChange = (text) => {
    const isValidEmail = validateEmail(text);
    setEmailError(isValidEmail ? "" : "Invalid email address");
    setEmailField(text);
  };

  const dispatchEmail = () => {
    const isValid = validateEmail(emailField) && emailField.length > 1;
    if (isValid) {
      dispatch(setEmail(emailField));
      handleOtpGeneration(emailField);
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

  const handleOtpGeneration = async ( val ) => {
    const email = val.toLowerCase()
    console.log(email)
    setLoading(true);
    try {
      const data = await resetPasswordApi({email}).unwrap();
      console.log(data)
      setLoading(false);
      if (data.msg) {
        navigate.navigate("Verification-for-reset-password");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <View style={styles.hold}>
            <View style={styles.holder}>
              <TouchableOpacity onPress={() => navigate.goBack()}>
                <Back style={styles.icon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>Forgot password</Text>
          </View>
          <Text style={styles.Header}>What's your Email Address?</Text>
          <Text style={styles.text2}>
            We'll send a reset code to your email address
          </Text>
          <View style={styles.input}>
            <CustomInputField
              placeholder="Enter email address"
              keyboardType={"default"}
              onChangeText={handleChange}
              value={emailField}
              error={emailError}
            />
          </View>
        </View>
        <View style={styles.btnView}>
          <CustomButton text="send verification code" onPress={dispatchEmail} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Emailresp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexDirection: "column",
    justifyContent: "space-between",
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
  },

  text: {
    fontFamily: "Raleway_600SemiBold",
    color: "#B4B4B4",
    fontSize: 16,
    lineHeight: 23,
    letterSpacing: 0.5,
  },

  text2: {
    fontFamily: "Raleway_600SemiBold",
    color: "#B4B4B4",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.5,
    margin: 10,
  },

  text3: {
    fontFamily: "Raleway_600SemiBold",
    color: "black",
    fontSize: 14,
    lineHeight: 20,
    margin: 10,
    textAlign: "center",
  },

  text3i: {
    fontFamily: "Raleway_600SemiBold",
    color: "black",
    fontSize: 14,
    lineHeight: 20,
    margin: 10,
  },

  brand: {
    color: "#0AC17F",
    fontFamily: "Raleway_600SemiBold",
    fontSize: 14,
    textAlign: "center",
  },

  hold: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 250,
  },

  Header: {
    fontFamily: "Raleway_800ExtraBold",
    fontSize: 32,
    lineHeight: 46,
    letterSpacing: 0.5,
    marginTop: 65,
  },

  input: {
    marginTop: 25,
  },
});
