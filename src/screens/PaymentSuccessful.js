
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/stack';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';


export default function PaymentSuccessful({navigation}) {
  return (
    <View style={styles.container}>
        
        <View>
            <Text style={styles.heading}>PAYMENT SUCCESSFUL</Text>
            <Text style={styles.text} >
                 Congrats, You have successfully completed your
                 shopping experience, you can cme back anytime.
                 Now go and enjoy your shopping. Tell your friends
                 and family about us. Look good and feel great.
            </Text>
        </View>

       
       <Image source={require('../../assets/3.png')} style={styles.image}/>
        

        <View >
            <TouchableOpacity onPress={()=>{
                   navigation.navigate("AddToCart")
                   }} style={styles.button}>
              <Text style={styles.btnText}>Get Started</Text>
           </TouchableOpacity>
        </View>

         
        <View style={styles.footer}>
            
                <View  style={styles.icon}>
                    <Text 
                         onPress={()=>{
                            navigation.navigate("AddToCart")
                        }} style={styles.previous}>Previous</Text>
                    
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
        height:230,
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
        backgroundColor:"#E2DEDE",
        borderRadius:100,
        height:7,
        width:7,
        marginRight:25,
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
        marginLeft:30, 
    },
    previous:{
      color:"#C6C1C1",
      alignSelf:"flex-start",
    },    
})
