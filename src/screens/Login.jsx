import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
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

const Login = () => {
  const navigate = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const moveToVerification = () => {
    navigate.navigate("");
  };

  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_800ExtraBold,
    Raleway_500Medium,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <View style={styles.hold}>
            <Text style={styles.text}>Create Password</Text>
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
              />
            </View>
            <View style={styles.input}>
              <CustomInputField
                placeholder="Enter Password"
                style={{ width: 320 }}
                secureTextEntry={showPassword}
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
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", transform: [{ translateX: -20 }] }}>
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
              <Text style={styles.text3i}>Forgot Password</Text>
            </View>
          </View>
        </View> 
        <View style={styles.btnView}>
          <CustomButton
            text="Finish Registration"
            type="email"
            onPress={moveToVerification}
          />
          <Text style={styles.text3}>
            By clicking ‘finish registeration’, you’re agreeing to Orie’s{" "}
            <Text style={styles.brand}> Terms and Condition</Text> and their{" "}
            <Text style={styles.brand}>Privacy Policy </Text>
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
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20
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
    textTransform: "capitalize",
  },
});
