
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import homeIcon from "../../assets/images/homes.png";
import settingsIcon from "../../assets/images/star.png"
import shopIcon from "../../assets/images/user.png"
import Icon from "../../assets/images/menu.png"
import HomeScreen from '../../screens/home';
import Account from '../../screens/account';
import Favorite from '../../screens/favorites';
import Menu from '../../screens/menu';

const Tab = createBottomTabNavigator();

function BottomStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image
                        source={homeIcon}
                        style={{ width: 25, height: 25 }}
                    />
                ),
            }}
            />
            <Tab.Screen name="Account" component={Account}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={shopIcon}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
            <Tab.Screen name="Favourites" component={Favorite}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={settingsIcon}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />

            <Tab.Screen name="Menu" component={Menu}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={Icon}
                            style={{ width: 20, height: 20 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomStack