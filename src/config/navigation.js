import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import TableScreen from '../screens/TablesScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen name="Login" component={LoginScreen} />
        
        </Stack.Navigator>
    );
};
  
export default Navigation;
