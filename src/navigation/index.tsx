
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TutorialScreen from '../screens/tutorial/index';
import LoginScreen from '../screens/login/index';
import VerificationScreen from '../screens/verification/index';
import ForgotPasswordScreen from '../screens/forgetPassword/index';
import SplashScreen from '../screens/splash/index';
import DrawerStack from './drawerTab/DrawerStack';
import ResetPasswordScreen from '../screens/resetPassword';
import FactorAuth from '../screens/2fa';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const alreadyLaunched = await AsyncStorage.getItem('alreadyLaunched');
        console.log(alreadyLaunched);
        if (alreadyLaunched === null) {
          await AsyncStorage.setItem('alreadyLaunched', 'true');
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error('Error checking first launch status:', error);
      }
    };
    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        options={{ headerShown: false }}>
        {props => <SplashScreen {...props} isFirstLaunch={isFirstLaunch} />}
      </Stack.Screen>
      <Stack.Screen name="reset" component={ResetPasswordScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="2fa" component={FactorAuth}  options={{ headerShown: false }}/>
      <Stack.Screen name="drawerStack" component={DrawerStack}  options={{ headerShown: false }}/>
      <Stack.Screen name="tutorial" component={TutorialScreen} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="verify" component={VerificationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="forgetPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthStack