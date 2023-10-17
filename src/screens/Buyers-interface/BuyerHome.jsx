import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import Notification from "../../../assets/Notificationbell.svg";
import CustomInputField from "../../components/inputField";
import { Raleway_800ExtraBold, Raleway_700Bold, Raleway_500Medium, Raleway_600SemiBold } from "@expo-google-fonts/raleway";
import Character from "../../../assets/Character.svg"
import Category from "../../../assets/darhboard.svg"
import CategoryHolder from "../../components/CategoryHolder";

const BuyerHome = () => {
  const [searchField, setSearchField] = useState("");
  const catergoriesArr = ["food items", "livestock & diary produces, herbs & spices", "fruits & vegetables", "view more"]

  const handleSearch = (text) => {
    setSearchField(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.inputHolder}>
          <View style={styles.notificationHolder}>
            <Notification />
          </View>

          <View style={{ width: "80%" }}>
            <CustomInputField
              onChangeText={handleSearch}
              value={searchField}
              placeholder="search for products"
            />
          </View>
        </View>
        <Text style={styles.Header}>
          Find Fresh and Sustainable Local Produce
        </Text>
        <View style={styles.gradientBox}>
          <View style={styles.textCont} >
            <Text style={styles.contText1}>set up your profile</Text>
            <Text style={styles.contText2}>
              You need to complete your in order to add to cart and continue to
              checkout, you can still browse for products and farmers.
            </Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>Go to profile</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Character />
          </View>
        </View>
        <View style={styles.categoryHolder}>
            <View style={styles.category}>
                <Text style={styles.categoryText}>Categories</Text>
                <View style={styles.icon}>
                 <Category />
                </View>
            </View>
    
                 {catergoriesArr.map((category, index) => {
                    return <CategoryHolder text={category} key={index} />
                })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BuyerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  category: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 10


  },

  categoryText: {
    fontFamily: "Raleway_600SemiBold",
    fontSize: 18,
    lineHeight: 25
  },

  categoryHolder: {
    alignSelf: "flex-start",
    marginTop: 20
  },
  inputHolder: {
    marginTop: 30,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100,
    justifyContent: "between",
    gap: 15,
  },
  notificationHolder: {
    height: 45,
    width: 45,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#B4B4B4",
    alignSelf: "center",
    alignSelf: "flex-start",
    transform: [{ translateY: 19 }],
  },

  icon: {
    transform: [{ translateY: 6 }]
  },
  Header: {
    fontFamily: "Raleway_800ExtraBold",
    fontSize: 26,
    lineHeight: 40,
    alignSelf: "flex-start",
    width: 385,
  },
  gradientBox: {
    backgroundColor: "#0AC17F",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 8,
    width: "100%",
    height: 160,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 15
  },

  textCont: {
    width: "70%",
    flexDirection: "column",
    alignItems: "center"
  },

  contText1: {
    fontFamily: "Raleway_700Bold",
    color: "#ffff",
    fontSize: 16,
    lineHeight: 23,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    margin: 5
  },

  contText2: {
    fontFamily: "Raleway_500Medium",
    color: "#ffff",
    fontSize: 12,
    lineHeight: 16
  },

  btn: {
    backgroundColor: "#ffff",
    width: 150,
    height: 40,
    borderRadius: 5,
    alignSelf: "flex-start",
    margin: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"

    
  },
  btntext: {
    textAlign: "center",
    fontFamily: "Raleway_500Medium",
    fontSize: 14,
  }
});
