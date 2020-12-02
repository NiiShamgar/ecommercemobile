import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/stack'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

export default function RectangleIndicator() {
  return (
        <View>
            <Text style={styles.container}></Text>
        </View>
   
  )}



  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#6388d6",
        borderRadius:100,
        height:8,
        width:12,
        marginHorizontal:1,
        alignSelf: "center"

    },
  }
)
