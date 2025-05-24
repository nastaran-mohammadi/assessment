import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/pages/home'
import CalculatorScreen from '@/pages/answers/calculator';
import NavbarScreen from '@/pages/answers/navbar';
import TwoSumUI from '@/pages/answers/question3_UI';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Navbar" component={NavbarScreen} />
        <Stack.Screen name="TwoSumUI" component={TwoSumUI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export type RootStackParamList = {
  Home: undefined;
  Calculator: undefined;
  Navbar: undefined;
  TwoSumUI: undefined;
};
