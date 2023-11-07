import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  Raleway_700Bold,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import AddBtn from "../../assets/Rectangle.svg"

const CheckoutItem = ({ item, style }) => {
  const {img, name, price} = item
  return (
    <View style={[styles.checkoutContainer, style]}>
      <Image
        source={{ uri: img }} 
        style={styles.image}
        resizeMode="cover"
      />
      <View style={{ margin: 5 }}>
        <Text style={styles.productDesc}>{name}</Text>
        <Text style={styles.farmName}>obapluto farm</Text>
      </View>
      <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'space-between', margin: 5}}>
        <Text style={styles.productDesc2}>{price}</Text>
       <View style={styles.add}><Text style={styles.addtext}>+</Text></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutContainer: {
    height: 228,
    width: 176,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    // Box shadow styles for Android
    elevation: 2,
  },

  add: {
    backgroundColor: "#0AC17F",
    width: 30,
    height: 30,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },

  addtext: {
    fontFamily: "Raleway_400Regular",
    color: "white",
    fontSize: 32,
    alignSelf: "center",
    textTransform: "uppercase",
    textAlign: "center",
    transform: [{ translateY: -9 }],
  
  },

  productDesc: {
    fontFamily: "Raleway_700Bold",
    fontSize: 14,
    paddingHorizontal: 5,
    textTransform: "capitalize",
  },

  productDesc2: {
    fontFamily: "Raleway_700Bold",
    fontSize: 18,
    paddingHorizontal: 5,
    textTransform: "capitalize",
  },

  farmName: {
    fontFamily: "Raleway_400Regular",
    fontSize: 12,
    textTransform: "capitalize",
    paddingHorizontal: 5,
  },
  image: {
    flex: 1,
    maxWidth: "100%",
    height: "auto",
  },
});

export default CheckoutItem;
