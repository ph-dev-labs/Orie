import { View, Text } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable"
import { Raleway_600SemiBold } from '@expo-google-fonts/raleway'

const AsyncHolder = ({text, visible}) => {
  return (
    <Animatable.View
    animation="slideInDown"
    duration={1700}
    style={{
      position: 'absolute',
      backgroundColor: '#1B1D1E',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      height: 43,
      width: 335,
      opacity: visible ? 1 : 0,
    }}
  >
    <Text style={{ color: 'white', fontFamily:"Raleway_600SemiBold", fontSize: 12, lineHeight: 18 }}>{text}</Text>
  </Animatable.View>
  )
}

export default AsyncHolder