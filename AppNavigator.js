import React from 'react';
import { createSwitchNavigator,createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Login/Login';

const LoginStack = createStackNavigator({ Login: Login });

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Login:LoginStack
});