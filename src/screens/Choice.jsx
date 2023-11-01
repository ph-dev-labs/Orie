import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Orie from "../../assets/1Orie.svg";
import { useFonts } from "expo-font";
import { Raleway_600SemiBold, Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import Buy from "../../assets/BagBuy.svg";
import Sell from "../../assets/shopsell.svg";
import CustomButton from "../components/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import { setUserType } from "../Redux/Auth/registerSlice";
import Holders from "../components/Holders";
import { useDispatch } from "react-redux";

const Choice = () => {
  const navigate = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch()

  const handleOptionPress = (option) => {
    setSelectedOption((prevSelected) => (prevSelected === option ? null : option));
  };

  const handlePress = () => {
    if (selectedOption) {
      dispatch(setUserType(selectedOption));
      navigate.navigate("Register-email");
    } else {
      // Display an error message or prevent navigation if no option is selected
    }
  };

  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <SafeAreaView style={styles.container}></SafeAreaView>;
  }

  const activeStyles = {
    borderColor: (option) => (selectedOption === option ? "#0AC17F" : "#B4B4B4"),
    svgColor: (option) => (selectedOption === option ? "#0AC17F" : "#000"),
    textColor: (option) => (selectedOption === option ? "#0AC17F" : "#000"),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cont}>
        <View style={styles.svgWrapper}>
          <Orie />
        </View>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Before we get started</Text>
          <Text style={styles.title}>What will you be using orie for?</Text>
        </View>
        <View style={styles.box}>
          <Holders
            title="buyer"
            icon={<Buy />}
            selected={selectedOption === "buyer"}
            onPress={() => handleOptionPress("buyer")}
            activeStyle={activeStyles}
          />
          <Holders
            title="seller"
            icon={<Sell />}
            selected={selectedOption === "seller"}
            onPress={() => handleOptionPress("seller")}
            activeStyle={activeStyles}
          />
        </View> 
        <View style={{transform: [{translateY: 35}]}}><CustomButton text="get started" onPress={handlePress} /></View>
      </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  content: {
    alignItems: "center",
    marginTop: 30,
    justifySelf: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Raleway_800ExtraBold",
    marginBottom: 10,
    lineHeight: 34,
    color: "black",
    textAlign: "center",
    width: 250,
  },
  cont: {
    alignItems: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#1B1C1E",
    fontFamily: "Raleway_600SemiBold",
    lineHeight: 23,
    marginBottom: 10,
  },
  svgWrapper: {
    marginTop: 50,
    width: 100,
    height: 100,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Choice;
