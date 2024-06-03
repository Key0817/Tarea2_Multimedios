import React from "react"
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function cambio(){

  const navigation=useNavigation()

  return (
    
    <View style={styles.container}>
      {/* <Image source={require('./assets/headerLogo.png')}/> */}

      <Text style={styles.txtBienve}>Cambio exitoso</Text>

      <Text style={styles.titleAcc} >Ya puedes iniciar sesión con tu nueva contraseña</Text>

        {/* <Image source={require('./assets/Listo.png')}/> */}

      <TouchableOpacity onPress={() => navigation.navigate("Login")} >
      <LinearGradient
        colors={['#00C1BB', '#005B58']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.btnLogin}
        >
        <Text style={styles.txtLogin} >Iniciar Sesión</Text>
      </LinearGradient>     
      </TouchableOpacity>



      <StatusBar style="auto" />


    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  txtBienve: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#34434D',
    textAlign: 'left',
    paddingLeft: 30,
  },

  titleAcc: {
    fontSize: 20,
    fontWeight: 'light',
    color: 'gray',
    textAlign: 'left',
    paddingLeft: 30,
    marginTop: 60,
  },

  txtInput: {
    width: '80%',
    height: 50,
    borderRadius: 30, 
    paddingLeft: 30,
    marginTop: 20,
    marginLeft: 20,
    borderColor: 'gray',
    color: 'gray',
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    textShadowOffset: {width:0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },

  txtPass: {
    textAlign: 'right',
    paddingTop: 10,
    marginRight: 50,
    color: '#00C1BB',
    fontSize: 15,
  },

  btnLogin: {
    borderRadius: 30,
    width: 219,
    height: 53,
    marginTop:35,
    marginLeft: 80,
    paddingTop:10,
  },

  txtLogin:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
   
  },

  txtCuenta: {
    textAlign: 'center',
    paddingTop: 10,
    color: '#00C1BB',
    fontSize: 15,
    alignItems:'center',
  },

  txtRegistrarse: {
    textAlign: 'center',
    color: '#00C1BB',
    fontSize: 15,
    alignItems:'center',
    fontWeight: 'bold',
  },
});