import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/stack'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

export default function RoundIndicator() {
  return (
        <View>
            <Text style={styles.container}></Text>
        </View>
   
  )}



  const styles = StyleSheet.create({
    container:{
            backgroundColor:"#DDD7D7",
            borderRadius:100,
            height:7,
            width:7,
            marginHorizontal:1,
            alignSelf:"center"
            
    },
  }
)
