import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnlineShopping from './Components/OnlineShopping';
import AddToCart from './Components/AddToCart';
import PaymentSuccessful from './Components/PaymentSuccessful';

export default function App() {
  return (
    <View style={styles.container}>
      <PaymentSuccessful/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
