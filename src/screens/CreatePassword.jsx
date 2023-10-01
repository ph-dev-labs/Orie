import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Back from "../../assets/back.svg";
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
import { TouchableOpacity } from "react-native";

const EmailReg = () => {
  const navigate = useNavigation();
  const [showPassword, setShowPassword] = useState(true);



  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const moveToVerification = () => {
    navigate.navigate("Login");
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
            <View style={styles.holder}>
              <TouchableOpacity onPress={() => navigate.goBack()}>
                <Back style={styles.icon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>Create Password</Text>
          </View>
          <Text style={styles.Header}>Create a password</Text>
          <Text style={styles.text2}>
            choose a strong password for your account
          </Text>
          <View style={styles.inputHolder}>
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
            <View style={styles.input}>
              <CustomInputField
                placeholder="Re-enter Password"
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
            <Text style={styles.text3i}>
              Must be 8-16 characters long
              Combinatio of number, text and a symbol e.g @, #
              
            </Text>
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

export default EmailReg;

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
    marginBottom: 30,
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
