import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Raleway_600SemiBold } from '@expo-google-fonts/raleway';
import { useFonts } from '@expo-google-fonts/raleway';

const CustomButton = ({ onPress, text, style }) => {
    
  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold
  })


  if(!fontsLoaded) {
    return (
      <TouchableOpacity style={styles.button}>

      </TouchableOpacity>
    )
  }

  
  return (
      <TouchableOpacity
        style={[styles.button, style]}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };
  
  CustomButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
  };

  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#0AC17F', // Replace with your desired background color
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      alignSelf: "center",
      height: 43,
      width: 335,
      borderRadius: 8,
      margin: 20
    },
    text: {
      color: '#fff', // Text color
      fontSize: 16,
      textAlign: "center",
      textTransform: "capitalize",
      lineHeight: 23,
      letterSpacing: .5,
      fontFamily: "Raleway_600SemiBold"
    },
  });

  export default CustomButton;
