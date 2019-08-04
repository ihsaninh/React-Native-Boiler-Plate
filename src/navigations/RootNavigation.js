import AuthLoading from '../screens/AuthLoading';
import Login from "../screens/Login"
import Home from "../screens/Home"

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

const AppStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { gesturesEnabled: true, header: null }
        }
    },
    {
        defaultNavigationOptions: {
            initialRouteName: Home,
            resetOnBlur: true,
        }
    }
);

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { gesturesEnabled: true, header: null }
        }
    },
    {
        defaultNavigationOptions: {
            initialRouteName: Login,
            resetOnBlur: true,
        }
    }
);

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'AuthLoading',
        resetOnBlur: true,
    }
));

export default createAppContainer(AppContainer);