import React, {useEffect, useState}  from 'react';
import { StyleSheet, SafeAreaView, View, Text, ActivityIndicator, Image } from 'react-native';
import { Raleway_400Regular } from '@expo-google-fonts/raleway';
import Logo from "../../assets/Logo.svg"
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { navigate } from '../Navigation/Navigation';
import { useFonts } from 'expo-font';


const LogoScreen = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
  });

  const navigation = useNavigation()

  useEffect(() => {
    // Add a delay to automatically navigate to another screen after 3 seconds
    const timeout = setTimeout(() => {
      navigate("Choice-Screen"); // Navigate to the "Logo-Screen"
    }, 2500); // 3000 milliseconds (3 seconds)

    return () => clearTimeout(timeout);
  }, [navigation]);
  useEffect(() => {
    // Wait for a brief moment (e.g., 1000ms) before marking the animation as complete
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0AC17F" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <Animatable.View
            animation={animationComplete ? 'fadeIn' : 'slideInRight'}
            duration={1000} // Adjust the duration as needed
          >
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        </Animatable.View>
        <Animatable.View
          animation={animationComplete ? 'fadeIn' : 'slideInRight'}
          duration={1000} // Adjust the duration as needed
          style={styles.textContainer}
        >
          <Text style={styles.text}>advancing smart experience</Text>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0AC17F',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
  },
  text: {
    fontFamily: 'Raleway_400Regular',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 1.5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoScreen;
