import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import Back from "../../assets/back.svg";
import { useFonts } from "expo-font";
import {
  Raleway_600SemiBold,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";
import CustomInputField from "../components/inputField";
import CustomButton from "../components/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { setNumber } from "../Redux/Auth/registerSlice";
import { useDispatch } from "react-redux";

const MobileReg = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [phoneNumber, setPhoneNumber] = useState("")
  
  const handleChange = (text) => {
    setPhoneNumber(text)
  } 

  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_800ExtraBold,
  });

  const handlePress = () => {
    navigation.navigate("Register-email");
  };

  const createPassword = () => {
    dispatch(setNumber(phoneNumber))
    navigation.navigate("Create-Password");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <View style={styles.hold}>
            <View style={styles.holder}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Back style={styles.icon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>Add your information</Text>
          </View>
          <Text style={styles.Header}>What's your mobile number?</Text>
          <Text style={styles.text2}>
            We'll send a verification to your provided phone number
          </Text>
          <View style={styles.input}>
            <CustomInputField placeholder="Enter phone number" keyboardType="numeric" onChangeText={handleChange} value={phoneNumber} />
          </View>
          <View>
            <Text style={styles.text3i}>
              Don't want to use phone number?{" "}
              <Text style={styles.brand} onPress={handlePress}>
                Use email instead
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.btnView}>
          <CustomButton
            text="Continue"
            onPress={createPassword}
          />
          <Text style={styles.text3}>
            Already have an account? <Text style={styles.brand}>Login</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MobileReg;

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
    justifyContent: "space-between"
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
  btnView: {
    marginTop: 100,
  },
});
