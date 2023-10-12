import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomInputField from "../components/inputField";
import CustomButton from "../components/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Back from "../../assets/back.svg";
import Eye from "../../assets/eye.svg";
import AsyncHolder from "../components/AsyncHolder";
import { useRegisterMutation } from "../Redux/Services/AuthAPi";
import { selectRegistration } from "../Redux/Auth/registerSlice";
import Loader from "./Loader";

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [passwordField, setPasswordField] = useState("");
  const [confirmPasswordField, setConfirmPasswordField] = useState("");
  const [error, setError] = useState("");
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [visible, setVisible] = useState(false);
  const navigate = useNavigation();
  const handlePassword = (text) => {
    setPasswordField(text);
  };


  const { email, number, userType } = useSelector(selectRegistration);
  const [register] = useRegisterMutation();

  const handleConfirmPassword = (text) => {
    setConfirmPasswordField(text);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#])[0-9a-zA-Z@#]{8,16}$/;
    return passwordRegex.test(password);
  };
  const handleRegistration = async () => {
    try {
      setError(""); // Reset any previous errors
  
      if (passwordField !== confirmPasswordField) {
        setError("Passwords do not match");
        return;
      }
  
      if (!validatePassword(passwordField)) {
        setError("Password criteria not met");
        return;
      }
  
      const userData = {
        email,
        number,
        userType,
        password: passwordField,
      };
  
      setIsLoading(true); // Set loading to true while processing
  
      // Call the register function and handle the result
      const result = await register(userData).unwrap();
      handleRegistrationResult(result);
    } catch (error) {
      // Handle any unexpected errors
      handleError(error);
    }
  };
  
  const handleRegistrationResult = async (result) => {
    try {
      setIsLoading(false); // Always set isLoading to false, whether it succeeds or fails
  
      if (result) {
        const responseData = await result;
        if (responseData) {
          showSuccessMessageAndRedirect();
        } 
      } 
    } catch (error) {
      handleError(error);
    }
  };
  

  const handleError = (error) => {
    if (error.data) {
      // If there is a response from the server
      const responseData = error.data;
      if (responseData && responseData.data && responseData.data.errorMsg) {
        setError(responseData.data.errorMsg);
      } 
    } else {
      setError("An unexpected error occurred");
    }
  };

  const showSuccessMessageAndRedirect = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      navigate.navigate("Verification");
    }, 2000);
  };

  if(isLoading) {
    return (
      <SafeAreaView style={{flex:1}}>
        <Loader />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.msgHolder}><AsyncHolder visible={visible} text="Otp successful sent" /></View>
        
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
          <CustomButton text="Continue" onPress={handleRegistration} />
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

  msgHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "red"
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
    position: "relative"
  },

  brand: {
    color: "#0AC17F",
  },

  hold: {
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
});
