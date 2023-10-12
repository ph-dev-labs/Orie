import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Orie from "../../assets/1Orie.svg";
import * as Animatable from "react-native-animatable";

const Loader = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Animatable.View
          animation="pulse" // Choose any animation from react-native-animatable
          iterationCount="infinite"
        >
          <Orie />
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default Loader;
