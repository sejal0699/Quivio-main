
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../../screens/home';
import Account from '../../screens/account';
import Favorite from '../../screens/favorites';
import Menu from '../../screens/menu';
import { ScreenNames } from '../screenNames';
import { Icons, Images } from '../../assets';

const Tab = createBottomTabNavigator();

function BottomStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={ScreenNames.Home} component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image
                        source={Icons.homeIcon}
                        style={{ width: 25, height: 25 }}
                    />
                ),
            }}
            />
            <Tab.Screen name={ScreenNames.Profile} component={Account}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={Icons.userIcon}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
            <Tab.Screen name={ScreenNames.Favourites} component={Favorite}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={Icons.settingsIcon}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />

            <Tab.Screen name={ScreenNames.Menu} component={Menu}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={Icons.menuIcon}
                            style={{ width: 20, height: 20 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomStack