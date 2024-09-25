
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomStack from '../bottomTab/BottomStack';

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="bottomStack" component={BottomStack} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}


export default DrawerStack