import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {screenNames} from '../constants';
import {
  Home,
  Login,
  BottomTab,
  Search,
  Cart,
  User,
  Collection,
  Detail,
  UpdateUser,
} from '../screens';
const Stack = createStackNavigator();
const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  headerShown: false,
};
const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.BottomTab}
      screenOptions={screenOptions}>
      <Stack.Screen name={screenNames.Login} component={Login} />
      <Stack.Screen name={screenNames.Home} component={Home} />
      <Stack.Screen name={screenNames.BottomTab} component={BottomTab} />
      <Stack.Screen name={screenNames.Search} component={Search} />
      <Stack.Screen name={screenNames.Cart} component={Cart} />
      <Stack.Screen name={screenNames.User} component={User} />
      <Stack.Screen name={screenNames.Collection} component={Collection} />
      <Stack.Screen name={screenNames.Detail} component={Detail} />
      <Stack.Screen name={screenNames.UpdateUser} component={UpdateUser} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
