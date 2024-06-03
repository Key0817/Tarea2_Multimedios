import React from "react"
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login_App/login";
import recuperar_1 from "./Recuperar_Cuenta/recuperar_c1";
import recuperar_c2 from "./Recuperar_Cuenta/recuperar_c2";
import create from "./Crear_Cuenta/create";
import cambio from "./Recuperar_Cuenta/cambio_e";


const Stack = createStackNavigator();


function Stacks() {
    return (
        <Stack.Navigator initialRouteName="Login" component={Login}>
            <Stack.Screen name="Login" component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Recuperar_c1" component={recuperar_1}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Recuperar_c2" component={recuperar_c2}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Formulario" component={create}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Exito" component={cambio}
                options={{
                    headerShown: false,
                }}
            />
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
