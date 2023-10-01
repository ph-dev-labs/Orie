import { StyleSheet, SafeAreaView, View, Text, Image } from "react-native";
import React from "react";
import Orie from "../../assets/1Orie.svg";
import { useFonts } from "expo-font";
import {
  Raleway_600SemiBold,
  Raleway_800ExtraBold,
} from "@expo-google-fonts/raleway";
import Holders from "../components/Holders";
import Buy from "../../assets/BagBuy.svg";
import Sell from "../../assets/shopsell.svg";
import CustomButton from "../components/CustomBtn";
import { useNavigation } from "@react-navigation/native";

const Choice = () => {
  const navigate = useNavigation();

  const handlePress = () => {
    navigate.navigate("Register-mobile");
  };

  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold,
    Raleway_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <SafeAreaView style={styles.container}></SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cont} >
        <View style={styles.svgWrapper}>
          <Orie />
        </View>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Before we get started</Text>
          <Text style={styles.title}>What will you be using orie for?</Text>
        </View>
        <View style={styles.box}>
          <Holders title="buying" icon={<Buy />} />
          <Holders title="selling" icon={<Sell />} />
        </View>
      </View>
      <CustomButton text="get started" onPress={handlePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between"
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
    marginTop: 90,
    width: 100,
    height: 100,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Choice;
