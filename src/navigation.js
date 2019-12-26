import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './LoginScreen';
import {MainScreen} from './Screen';
import NewPostScreen from './NewPostScreen';
import AuthLoadingScreen from './AuthLoadingScreen';

const AuthenticatedStack = createStackNavigator({
  RootScreen: {
    screen: MainScreen,
  },
  NewPost: {
    screen: NewPostScreen,
  },
});

const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Login: {
    screen: LoginScreen,
  },
  Main: {
    screen: AuthenticatedStack,
  },
}, { initialRouteName: 'AuthLoading' });

export default createAppContainer(AppNavigator);
