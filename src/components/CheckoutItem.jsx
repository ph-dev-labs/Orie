import { StyleSheet, Text, View } from 'react-native'
import React,{lazy, Suspense} from 'react'

const CheckoutItem = ({ imageURL }) => {
    return (
      <LazyLoad height={218} offset={100}>
        <View style={styles.checkoutContainer}>
          <Image
            source={{ uri: imageURL }} // Replace with the actual image source
            style={styles.image}
            resizeMode="cover"
          />
          <Text>CheckoutItem</Text>
        </View>
      </LazyLoad>
    );
  };
  