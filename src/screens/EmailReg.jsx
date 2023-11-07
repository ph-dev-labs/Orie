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
import { setEmail, setLoading } from "../Redux/Auth/registerSlice";
import { useDispatch } from "react-redux";
import { useCheckEmailMutation } from "../Redux/Services/AuthAPi";
import Loader from "./Loader";

const EmailReg = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const [emailAd, setEmailAd] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);
  const [checkEmail] = useCheckEmailMutation();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const isEmailValid = (text) => {
    return emailRegex.test(text);
  };

  const handleEmailValidation = (text) => {
    setEmailAd(text);
    const isValidEmail = isEmailValid(text);
    setEmailError(isValidEmail ? "" : "Invalid email address");
  };

  const checkEmailExistence = async (email) => {
    try {
      if (isEmailValid(email)) {
        const payload = { email };
        const response = await checkEmail(payload).unwrap();

        if (response.status === 200) {
          setIsEmailAvailable(true);
        }
      }
    } catch (error) {
      setIsEmailAvailable(false);
      setEmailError("Email already exists");
    }
  };

  const navigateToLogin = () => {
    navigate.navigate("Login");
  };

  useEffect(() => {
    checkEmailExistence(emailAd);
  }, [emailAd]);
  const handlePress = () => {
    navigate.navigate("Register-mobile");
  };

  const dispatchEmail = () => {
    if (emailError === "") {
      dispatch(setEmail(emailAd));
      navigate.navigate("Create-Password");
    }
  };

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
            <Text style={styles.text}>Add your information</Text>
          </View>
          <Text style={styles.Header}>What's your Email Address?</Text>
          <Text style={styles.text2}>
            We'll send a verification to your email address
          </Text>
          <View style={styles.input}>
            <CustomInputField
              placeholder="Enter email address"
              keyboardType={"default"}
              onChangeText={handleEmailValidation}
              value={emailAd}
              error={emailError}
            />
          </View>
          <View>
            <Text style={styles.text3i}>
              Don't want to use email?{" "}
              <Text style={styles.brand} onPress={handlePress}>
                Use mobile number instead
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.btnView}>
          <CustomButton text="Continue" onPress={dispatchEmail} />
          <View style={styles.loginLink} >
            <Text style={styles.text31}>Already have an account? </Text>
            <TouchableOpacity onPress={navigateToLogin} style={styles.brand}>
              <Text style={styles.brand}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailReg;

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

  text31: {
    fontFamily: "Raleway_600SemiBold",
    color: "black",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
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
    width: 280,
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
  loginLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    margin: 10
  },
});
