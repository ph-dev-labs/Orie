import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const CheckoutItem = ({ imageURL }) => {
  return (
    
      <View style={styles.checkoutContainer}>
        <Image
         // Replace with the actual image source
          style={styles.image}
          resizeMode="cover"
        />
        <Text>CheckoutItem</Text>
      </View>
    
  );
};

const styles = StyleSheet.create({
  checkoutContainer: {
    height: 268,
    width: 206,
    borderRadius: 7.18,
    overflow: 'hidden', // This is important for proper image display
    backgroundColor: "red",
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default CheckoutItem;
