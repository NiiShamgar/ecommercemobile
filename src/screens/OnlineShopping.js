import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/stack'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
//import Button from './components/Button';
import RoundIndicator from '../components/RoundIndicator';
import RectangleIndicator from '../components/RectangleIndicator';

export default function OnlineShopping({navigation}) {
  return (
    <View style={styles.container}>
        
        <View>
            <Text style={styles.heading}>ONLINE SHOPPING</Text>
            <Text style={styles.text} >
                 Hello, Welcome to the best online
                 shopping experience so that you can have the time
                 of your life.
            </Text>
        </View>

       
        <Image source={require('../../assets/1.png')} style={styles.image}/>
        

         <View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("AddToCart", {newTitle:"CART READY"})
            }}
                style={styles.button}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
        </View>

          
    
         
        <View style={styles.footer}>
            <View style={styles.indicators}>
                <RectangleIndicator/>
                <RoundIndicator/>
                <RoundIndicator/>
            </View>
            <View>
                 <Text onPress={()=>{
                      navigation.navigate("PaymentSuccessful")
                      }}
                    style={styles.skip}>Skip</Text>
            </View>            
            
        </View>
          
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:30,
        justifyContent: "space-around",        
    },
    heading:{
        fontSize:20,
        fontWeight:"bold"
    },
    text:{
        color:"#9B9797",
        marginTop:10,
    },
    image:{
        width:350,
        height:350,
        marginLeft:-25
    },
    button:{
        justifyContent:"center",
        backgroundColor:"#6388d6",
        borderRadius:50,
        alignSelf:"center",
        justifyContent:"center",
        height:50,
        width: 150
    },
    btnText:{
        color:"white",
        alignContent:"center",
        alignSelf:"center",
        fontSize:15,
        fontWeight:"bold"
    },
    indicators:{  
        justifyContent:"center" ,
        flexDirection:"row",
    },
    skip:{
        color:"#C6C1C1",
        alignSelf:"flex-end",   
    },
    
})
