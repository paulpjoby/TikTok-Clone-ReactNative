import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Loading from '../screens/loading';
import Main from '../screens/main';
import Login from '../screens/login';
import Register from '../screens/register';
import UserPage from '../screens/userpage';
import Home from '../screens/home';


const screenPages = {
    //First one is default Route
    loading: {
        screen: Loading,
        headerMode: 'none',
        navigationOptions: {
            headerShown: false,
        }
    },
    login: {
        screen: Login,
        headerMode: 'none',
        navigationOptions: {
            headerShown: false,
        }
    },
    register: {
        screen: Register,
        headerMode: 'none',
        navigationOptions: {
            headerShown: false,
        }
    },
    main: {
        screen: Main,
        headerMode: 'none',
        navigationOptions: {
            headerShown: false,
        }
    },
    home: {
        screen: Home,
        headerMode: 'none',
        navigationOptions: {
            headerShown: false,
        }
    },
    userPage: {
        screen: UserPage, 
        headerMode: 'none',
        navigationOptions: {
            headerShown: false,
        }
    }
}

const homeStack = createStackNavigator(screenPages);

export default createAppContainer(homeStack);