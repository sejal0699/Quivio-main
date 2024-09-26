
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
import { ScreenNames } from './screenNames';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import EditProfileScreen from '../screens/profile';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  const navigationRef: any = useNavigationContainerRef();
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

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
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={ScreenNames.Splash}>
        <Stack.Screen
          name={ScreenNames.Splash}
          options={{ headerShown: false }}>
          {props => <SplashScreen {...props} isFirstLaunch={isFirstLaunch} />}
        </Stack.Screen>
        <Stack.Screen name={ScreenNames.Reset} component={ResetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name={ScreenNames.FA} component={FactorAuth} options={{ headerShown: false }} />
        <Stack.Screen name={ScreenNames.Drawer} component={DrawerStack} options={{ headerShown: false }} />
        <Stack.Screen name={ScreenNames.Tutorial} component={TutorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name={ScreenNames.Login} component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name={ScreenNames.Verify} component={VerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name={ScreenNames.ForgotPassword} component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name={ScreenNames.Account} component={EditProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator