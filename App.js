import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import OnlineShopping from './src/screens/OnlineShopping';
import AddToCart from './src/screens/AddToCart';
import PaymentSuccessful from './src/screens/PaymentSuccessful';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="OnlineShopping" component={OnlineShopping}/>
        <Stack.Screen name="AddToCart" component={AddToCart}/>
        <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessful}/>

      </Stack.Navigator>

    </NavigationContainer>

  )
}