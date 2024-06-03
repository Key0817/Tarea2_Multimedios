import React from "react"
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login_App/login";
import recuperar_1 from "./Recuperar1/recuperar_c1";

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
            {/* <Stack.Screen name="HomeBtnStack" component={HomeBtn}/> */}
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