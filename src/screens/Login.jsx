import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Eye from "../../assets/eye.svg";
import { useFonts } from "expo-font";
import {
  Raleway_600SemiBold,
  Raleway_800ExtraBold,
  Raleway_500Medium,
} from "@expo-google-fonts/raleway";
import CustomInputField from "../components/inputField";
import CustomButton from "../components/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "@rneui/themed";
import { useUserLoginMutation } from "../Redux/Services/AuthAPi";
import { loginFailure, loginSuccess } from "../Redux/Auth/Login";
import { useSelector, useDispatch } from "react-redux";
import Finger from "../../assets/fingerprint.svg";
import Loader from "./Loader";

const Login = () => {
  const navigate = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = React.useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordFIeld] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginApi] = useUserLoginMutation();

  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailField = (text) => {
    setEmailField(text);
  };

  const handlePasswordField = (text) => {
    setPasswordFIeld(text);
  };

  const moveToShopPage = async () => {
    try {
      setIsLoading(true);
      const response = await loginApi({ emailField, passwordField }).unwrap();
      const data = response.data;
      console.log(data);
      setIsLoading(false);
  
      // Save the token in AsyncStorage
      try {
        await AsyncStorage.setItem(ASYNC_STORAGE_KEY, data.data.token);
      } catch (error) {
        console.error("Error storing token in AsyncStorage:", error);
      }
  
      dispatch(loginSuccess(data.data));
      navigate.navigate("/dashboard");
    } catch (error) {
      setIsLoading(false);
  
      if (error.data) {
        // If there's a response object, it means it's an HTTP error
        console.log(error.res.msg)
        setIsLoading(false)
        const status = error.status;
        const errorMessage = error.res.msg || "Something went wrong";
        console.log(`HTTP Error [Status ${status}]: ${errorMessage}`);
        dispatch(loginFailure(errorMessage));
      } else {
        // Handle non-HTTP errors
        console.error("Non-HTTP Login error:", error);
        dispatch(loginFailure(errorMessage));
      }
    }
  };
  
  let greetText;
  const handleGreetText = () => {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return (greetText = "Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      return (greetText = "Good afternoon");
    } else {
      return (greetText = "Good evening");
    }
  };

  handleGreetText();

  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_800ExtraBold,
    Raleway_500Medium,
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
        <View style={{}}>
          <View style={styles.hold}>
            <Text style={styles.text}>{`${greetText} \u{1F44B}`}</Text>
          </View>
          <Text style={styles.Header}>Securely Login to your account</Text>
          <Text style={styles.text2}>
            Enter your email or number and password
          </Text>
          <View style={styles.inputHolder}>
            <View style={styles.input}>
              <CustomInputField
                placeholder="Enter email or phone number"
                style={{ width: 320 }}
                onChangeText={handleEmailField}
                value={emailField}
              />
            </View>
            <View style={styles.input}>
              <CustomInputField
                placeholder="Enter Password"
                style={{ width: 320 }}
                secureTextEntry={showPassword}
                onChangeText={handlePasswordField}
                value={passwordField}
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
          <View style={{ transform: [{ translateY: -35 }] }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  transform: [{ translateX: -15 }],
                }}
              >
                <CheckBox
                  checked={checked}
                  onPress={toggleCheckbox}
                  iconType="material-community"
                  checkedIcon="checkbox-outline"
                  uncheckedIcon={"checkbox-blank-outline"}
                  checkedColor="black"
                  uncheckedColo="black"
                />
                <Text style={styles.text3i}>Remember me</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigate.navigate("Email-for-reset-password");
                }}
              >
                <Text style={styles.text3i}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            height: 140,
            transform: [{ translateY: -15 }],
          }}
        >
          <Finger />
          <Text style={{ fontFamily: "Raleway_500Medium", margin: 10 }}>
            Login with biometrics
          </Text>
        </View>
        <View style={{ height: 100, justifyContent: "space-evenly" }}>
          <CustomButton text="Login" onPress={moveToShopPage} />
          <Text style={styles.text3}>
            Don't have an account ?<Text style={styles.brand}> sign up</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  eyeIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
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

  inputHolder: {
    height: 150,
    marginTop: 15,
  },

  text: {
    fontFamily: "Raleway_600SemiBold",
    color: "black",
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
    fontSize: 14,
    lineHeight: 20,
    margin: 10,
    textAlign: "center",
  },

  text3i: {
    fontFamily: "Raleway_600SemiBold",
    color: "black",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
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
    fontSize: 28,
    lineHeight: 38,
    letterSpacing: 0.5,
    marginTop: 19,
    textTransform: "capitalize",
  },
});
