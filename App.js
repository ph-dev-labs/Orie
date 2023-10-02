import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Main from './Main'
import store from './src/Redux/Store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Provider store={store}><Main /></Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});