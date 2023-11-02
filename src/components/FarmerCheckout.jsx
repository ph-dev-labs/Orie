import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  Raleway_700Bold,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import AddBtn from "../../assets/Rectangle.svg"

const FarmerCheckout = ({ imageURL }) => {
  return (
    <View style={styles.checkoutContainer}>
       <Image
        source={require('../../assets/annie-spratt-QYcSeY7vuZM-unsplash.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={{ margin: 5 }}>
        <Text style={styles.productDesc}>Obapluto farms</Text>
        <Text style={styles.farmName}>Rumuola, Port-Harcourt</Text>
      </View>
      <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'space-between', margin: 5}}>
        <Text style={styles.productDesc2}>4.0 rating based on 189 buyers</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutContainer: {
    height: 215,
    width: 175,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 4
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
    fontFamily: "Raleway_400Regular",
    fontSize: 12,
    paddingHorizontal: 5,
    textTransform: "capitalize",
  },

  farmName: {
    fontFamily: "Raleway_400Regular",
    fontSize: 12,
    textTransform: "capitalize",
    paddingHorizontal: 5,
    color: "grey"
  },
  image: {
    flex: 1,
    maxWidth: "100%",
    height: "auto",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
});

export default FarmerCheckout;
