import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomInputField from "../components/inputField";
import CustomButton from "../components/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Back from "../../assets/back.svg";
import Eye from "../../assets/eye.svg";
import { registerUserAsync } from "../Redux/Auth/registerSlice";

import {
  setPassword,
  setConfirmPassword,
  selectRegistration,
} from "../Redux/Auth/registerSlice";

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [passwordField, setPasswordField] = useState("");
  const [confirmPasswordField, setConfirmPasswordField] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const handlePassword = (text) => {
    setPasswordField(text);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#])[0-9a-zA-Z@#]{8,16}$/;
    return passwordRegex.test(password);
  };

  const { email, number, userType, password } = useSelector(selectRegistration);

  const handleConfirmPassword = (text) => {
    setConfirmPasswordField(text);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const { isError, errorMessage } = useSelector(selectRegistration);

  const moveToOtp = async () => {
    try {
      // Reset any previous errors
      setError("");

      // Check if passwords match
      if (passwordField !== confirmPasswordField) {
        setError("Passwords do not match");
        return;
      }

      // Validate password
      if (!validatePassword(passwordField)) {
        setError("Password criteria not met");
        return;
      }

      // Dispatch password and confirmPassword to Redux
      dispatch(setPassword(passwordField));
      dispatch(setConfirmPassword(confirmPasswordField));

      // Dispatch the registration action and wait for it to complete
      dispatch(
        registerUserAsync({ email, password: passwordField, number, userType })
      ); // Assuming you have imported and configured Redux Toolkit's 'getState' function

      // After the registration action is completed, check if isError is true
      if (isError) {
        setError(errorMessage);
      } else {
        navigate.navigate("Verification");
      }
    } catch (error) {
      setError(error.message);
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
            <Text style={styles.text}>Create Password</Text>
          </View>
          <Text style={styles.Header}>Create a password</Text>
          <Text style={styles.text2}>
            Choose a strong password for your account
          </Text>
          <View style={styles.inputHolder}>
            <View style={styles.input}>
              <CustomInputField
                placeholder="Enter Password"
                style={{ width: 320 }}
                secureTextEntry={showPassword}
                value={passwordField}
                onChangeText={handlePassword}
                error={error}
              />
              <TouchableOpacity
                onPress={handleShowPassword}
                style={styles.eyeIcon}
              >
                <View
                  style={[styles.eyeIcon, { transform: [{ translateX: -35 }] }]}
                >
                  <Eye />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <CustomInputField
                placeholder="Re-enter Password"
                style={{ width: 320 }}
                secureTextEntry={showPassword}
                value={confirmPasswordField}
                onChangeText={handleConfirmPassword}
                error={error}
              />
              <TouchableOpacity
                onPress={handleShowPassword}
                style={styles.eyeIcon}
              >
                <View
                  style={[styles.eyeIcon, { transform: [{ translateX: -35 }] }]}
                >
                  <Eye />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ transform: [{ translateY: -7 }] }}>
            <Text style={styles.text3i}>
              Must be 8-16 characters long Combination of number, text, and a
              symbol (e.g., @, #)
            </Text>
          </View>
        </View>
        <View style={styles.btnView}>
          <CustomButton text="Continue" type="email" onPress={moveToOtp} />
          <Text style={styles.text3}>
            By clicking 'Finish Registration', you're agreeing to Orie's{" "}
            <Text style={styles.brand}>Terms and Conditions</Text> and their{" "}
            <Text style={styles.brand}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  eyeIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
    position: "fixed",
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
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

  inputHolder: {
    height: 150,
    marginTop: 15,
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
    width: 500,
  },

  text3: {
    fontFamily: "Raleway_600SemiBold",
    color: "black",
    fontSize: 12,
    lineHeight: 20,
    margin: 10,
    textAlign: "center",
  },

  text3i: {
    fontFamily: "Raleway_600SemiBold",
    color: "black",
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 10,
  },

  brand: {
    color: "#0AC17F",
  },

  hold: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 230,
  },

  Header: {
    fontFamily: "Raleway_800ExtraBold",
    fontSize: 32,
    lineHeight: 46,
    letterSpacing: 0.5,
    marginTop: 65,
  },
});
