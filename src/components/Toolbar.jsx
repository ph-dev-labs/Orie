import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Home2 from "../../assets/Home2.svg";
import Group from "../../assets/darhboard_alt.svg";
import Profile from "../../assets/profile.svg";
import Bag from "../../assets/bag.svg";
import Solar from "../../assets/solar_compass-big-linear.svg";
import { useNavigation } from "@react-navigation/native";

const Toolbar = () => {
  const [selectedOption, setSelectedOption] = useState("home");
  const navigation = useNavigation();

  const toolbarItems = [
    {
      icon: <Home2 />,
      text: "home",
    },
    {
      icon: <Solar />,
      text: "browser",
    },
    {
      icon: <Group />,
      text: "categories",
    },
    {
      icon: <Bag />,
      text: "cart",
    },
    {
      icon: <Profile />,
      text: "account",
    },
  ];

  const handleItemClick = (text) => {
    if (selectedOption === text) {
      setSelectedOption(selectedOption);
    } else {
      setSelectedOption(text);
      navigation.navigate(text);
    }
  };

  return (
    <View style={styles.toolbar}>
      <View style={styles.toolbarItems}>
        {toolbarItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.toolbarItem}
            onPress={() => handleItemClick(item.text)}
          >
            {React.cloneElement(item.icon, {
              fill: selectedOption === item.text ? "#0AC17F" : "none",
              stroke: selectedOption === item.text ? "#0AC17F" : "none",
              backgroundColor: selectedOption === item.text ? "#0AC17F" : "none",
            })}

            <Text
              style={[
                styles.text,
                {
                  color: selectedOption === item.text ? "#0AC17F" : "#1B1C1E",
                },
              ]}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  toolbar: {
    transform: [{ translateY: 19 }],
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  toolbarItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  toolbarItem: {
    alignItems: "center",
  },
  text: {
    textTransform: "capitalize",
    fontSize: 14,
    fontFamily: "Raleway_600SemiBold",
  },
});
