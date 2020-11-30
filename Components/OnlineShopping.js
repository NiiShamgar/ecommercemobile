import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
//import Button from './components/Button';
//import RoundIndicator from '../components/RoundIndicator';

export default function OnlineShopping() {
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

       
        <Image source={require('../assets/1.png')} style={styles.image}/>
        

         <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
        </View>

          
    
         
        <View style={styles.footer}>
            <TouchableOpacity style={styles.line}>
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
                    <Text style={styles.skip}>Skip</Text>
                </View>            
            </TouchableOpacity>
        </View>
          
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:30,
        justifyContent: "space-around",
        marginTop:90        
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
    },
    current:{
        backgroundColor:"#6388d6",
        borderRadius:100,
        height:8,
        width:12,
        alignSelf:"center",
        marginRight:30
    },
    skip:{
        color:"#C6C1C1",
        alignSelf:"flex-end",   
    },
})
