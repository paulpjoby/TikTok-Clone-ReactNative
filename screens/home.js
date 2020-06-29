import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, StyleSheet, Text, StatusBar} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Main from './main';
import Login from './login';
import { NavigationContainer } from '@react-navigation/native';
import Upload from './upload';
import UserPage from './userpage';
import Register from './register';
import { createStackNavigator } from 'react-navigation-stack';
import homeStack from '../routes/homeStack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showLoginButton: true,
        }
    }
    render() {
        const Tab = createMaterialBottomTabNavigator();
    

        return (
            <View style = {{height:"100%"}} >

            
            {/* <View style = {{position:'absolute', top: 0, right: 0, paddingTop: 10, paddingRight: 15, zIndex: 5,}}>
                <TouchableOpacity onPress={() => {this.props.navigation.push('login'); }}>
                <Icon name="sign-in-alt" color='#FFF' size={30} />
                </TouchableOpacity>
            </View> */}
          

            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen 
                        name="Feed"
                        component={Main}
                        // listeners={{
                        //     tabPress: e => {
                        //       console.log('Feed');
                        //     //   this.setState({showLoginButton: true});
                        //     },
                        //   }}
                        options={{
                            tabBarLabel: 'Feeds',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="home" color={color} size={26} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Upload"
                        component={Upload}

                        options={{
                            tabBarLabel: 'Upload',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="plus" color={color} size={26} />
                            ),
                        }}
                    />
                    
                    <Tab.Screen
                        name="Profile"
                        component={UserPage}
                        
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account" color={color} size={26} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
            </View>
        );
    }
}