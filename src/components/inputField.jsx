import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useFonts } from 'expo-font';
import { Raleway_600SemiBold,  } from '@expo-google-fonts/raleway';


const CustomInputField = ({ value, onChangeText, error, placeholder, style, keyboardType, secureTextEntry, onFocus }) => {

  const [fontsLoaded] = useFonts({
    Raleway_600SemiBold
  })

    const isError = error && error.length > 0;

    if(!fontsLoaded) {
      return (
        <View style={styles.inputContainer}>

        </View>
      )
    }
  
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, style, isError && styles.errorInput]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onFocus={onFocus}
        />
        {isError && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  };
  
  CustomInputField.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    onFocus: PropTypes.func,
    
  };
  

  const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#B4B4B4', // Default border color
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      fontFamily: "Raleway_600SemiBold",
      fontSize: 16,
      lineHeight: 23, 
      height: 40,
      width: "100%",
      overflow: "hidden"
    },
    errorInput: {
      borderColor: 'red', // Border color when there's an error
    },
    errorText: {
      color: 'red', // Error text color
      fontSize: 12,
      fontFamily: "Raleway_600SemiBold",
      position: "absolute",
      transform: [{ translateY: 30 }],
      margin: 5,
      padding: 4
    },
  });
  
  export default CustomInputField;
