import React from "react"
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login_App/login";
import Recuperar_1 from "./Recuperar_Cuenta/recuperar_c1";
import Recuperar_c2 from "./Recuperar_Cuenta/recuperar_c2";
import Create from "./Login_App/create";
import Cambio from "./Recuperar_Cuenta/cambio_e";


const Stack = createStackNavigator();


function Stacks() {
    return (
        <Stack.Navigator initialRouteName="Login" component={Login}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Recuperar_c1" component={Recuperar_1}/>
            <Stack.Screen name="Recuperar_c2" component={Recuperar_c2}/>
            <Stack.Screen name="Formulario" component={Create}/>
            <Stack.Screen name="Exito" component={Cambio}/>
        </Stack.Navigator>
    );
}

export default function Navegacion() {
    return (
        <NavigationContainer>
            <Stacks />
        </NavigationContainer>
    );
}
