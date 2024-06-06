import React from "react"
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function Recuperar_1(){

  const navigation=useNavigation()

  return (
    
    <View style={styles.container}>
      <Image source={require('../assets/img.png')} style={{width: '100%'}}/> 

      <Text style={styles.txtBienve}>Recuperar Cuenta</Text>

      <Text style={styles.titleAcc} >Ingrese su correo electrónico para recuperar su cuenta:</Text>

      <TextInput style={styles.txtInput} placeholder='multimedios@gmail.com'></TextInput>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>   
      <Text style={styles.txtPass}>Iniciar Sesión</Text>
      </TouchableOpacity>   

      <TouchableOpacity onPress={() => navigation.navigate("Recuperar_c2")} >
      <LinearGradient
        colors={['#00C1BB', '#005B58']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.btnLogin}
        >
        <Text style={styles.txtLogin} >Continuar</Text>
      </LinearGradient>     
      </TouchableOpacity>

      <Text style={styles.txtCuenta}>No tienes cuenta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Formulario")}>
      <Text style={styles.txtRegistrarse}>Registrarse</Text>
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
    marginTop: 10,
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