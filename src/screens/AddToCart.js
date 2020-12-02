import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/stack';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';


export default function AddToCart({route,navigation}) {
  console.log(route.params)
  const {newTitle} = route.params
  return (
    <View style={styles.container}>
        
        <View>
            <Text style={styles.heading}>ADD TO CART</Text>
            <Text style={styles.text} >
                 Hello, Welcome to the best online
                 shopping experience so that you can have the time
                 of your life. Select whatever you would like. 
                 Make the most of your time. Look good.
            </Text>
        </View>

       
      <Image source={require('../../assets/2.png')} style={styles.image}/>
        

      <View>
          <TouchableOpacity onPress={()=>{
              navigation.navigate("PaymentSuccessful")
          }}
          style={styles.button}>
              <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
      </View>

          
    
         
        <View style={styles.footer}>
                <View style={styles.icon} >
                    <Text onPress={()=>{
                      navigation.navigate("OnlineShopping")
                      }} 
                          style={styles.previous}>Previous</Text>
                </View>
                <View style={styles.icon}>
                    <Text style={styles.current}></Text>
                </View>
                <View style={styles.icon}>
                    <Text style={styles.page1}></Text>
                </View>
                <View style={styles.icon}>
                    <Text style={styles.page2}></Text>
                </View>
                <View style={styles.icon}>
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
        width:300,
        height:270,
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
    icon:{
        flex:2,
        justifyContent:"center",        
    },
    page1:{
        backgroundColor:"#DDD7D7",
        borderRadius:100,
        height:7,
        width:7,
        marginLeft:25,
        alignSelf:"center"
    },
    page2:{
        backgroundColor:"#DDD7D7",
        borderRadius:100,
        height:7,
        width:7,
        alignSelf:"center", 
        marginRight:25   
    },
    current:{
        backgroundColor:"#6388d6",
        borderRadius:100,
        height:8,
        width:12,
        alignSelf:"center",
        
    },
    previous:{
      color:"#C6C1C1",
      alignSelf:"flex-start", 

    },
    skip:{
        color:"#C6C1C1",
        alignSelf:"flex-end",    
    },   
})
