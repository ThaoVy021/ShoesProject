import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {screenNames} from '../../constants';
import Search from '../Search';
import User from '../User';
import Cart from '../Cart';
import Collection from '../Collection';
import Home from '../Home';
import COLORS from '../../constants/theme';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          backgroundColor: COLORS.COLORS.black,
          padding: 10,
          marginLeft: 20,
          marginRight: 20,
          paddingBottom: 10,
          borderRadius: 20,
          height: 70,
        },
      }}>
      <Tab.Screen name={screenNames.Home} component={Home} />
      <Tab.Screen name={screenNames.Search} component={Search} />
      <Tab.Screen name={screenNames.Collection} component={Collection} />
      <Tab.Screen
        name={screenNames.Cart}
        component={Cart}
        options={{
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen name={screenNames.User} component={User} />
    </Tab.Navigator>
  );
};

export default BottomTab;
