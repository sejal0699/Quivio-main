import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/index';



const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
     <AuthStack/>
    </NavigationContainer>
  );
};

export default App;
