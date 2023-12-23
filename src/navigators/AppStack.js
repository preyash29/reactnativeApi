import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  drawerScreenOptions,
  appStackHeaderOptions,
  appStackScreenOptions,
} from '../config/navigationConfig';

import Home from '../components/Home/Home';
import Category from '../components/Category/Category';
import Notification from '../components/Notification/Notification';
import Profile from '../components/Profile/Profile'
import SideMenu from '../components/SideMenu/SideMenu';

const AppStack = createNativeStackNavigator();
const HomeStack = () => (
  <AppStack.Navigator
    initialRouteName={'Home'}
    screenOptions={{
      ...appStackScreenOptions,
      // headerTitle: '',
    }}>
    <AppStack.Screen
      name="Home"
      component={Home}
      options={appStackHeaderOptions}
    />
  </AppStack.Navigator>
);
const CategoryStack = () => (
  <AppStack.Navigator
    initialRouteName={'Category'}
    screenOptions={{
      ...appStackScreenOptions,
      // headerTitle: '',
    }}>
    <AppStack.Screen
      name="Category"
      component={Category}
      options={appStackHeaderOptions}
    />
  </AppStack.Navigator>
);
const NotificationStack = () => (
  <AppStack.Navigator
    initialRouteName={'Notification'}
    screenOptions={{
      ...appStackScreenOptions,
      // headerTitle: '',
    }}>
    <AppStack.Screen
      name="Notification"
      component={Notification}
      options={appStackHeaderOptions}
    />
  </AppStack.Navigator>
);
const ProfileStack = () => (
  <AppStack.Navigator
    initialRouteName={'Profile'}
    screenOptions={{
      ...appStackScreenOptions,
      // headerTitle: '',
    }}>
    <AppStack.Screen
      name="Profile"
      component={Profile}
      options={appStackHeaderOptions}
    />
  </AppStack.Navigator>
);
const Tab = createBottomTabNavigator();
const Tabs = () => (
  <Tab.Navigator>
     <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
     <Tab.Screen name="Category" component={CategoryStack} options={{ headerShown: false }} />
    <Tab.Screen name="Notification" component={NotificationStack} options={{ headerShown: false }} />
    <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }} />
    {/* Add more tabs/screens as needed */}
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();

export default function AppContainer() {
  return (
    
      <Drawer.Navigator
        drawerContent={props => <SideMenu navigation={props.navigation} {...props} />}
        defaultStatus={'closed'}
        screenOptions={drawerScreenOptions}
        drawerPosition={'left'}
        initialRouteName={'Tabs'}>
        <Drawer.Screen name="Tabs" component={Tabs} />
        {/* Add more drawer screens as needed */}
      </Drawer.Navigator>
   
  );
}