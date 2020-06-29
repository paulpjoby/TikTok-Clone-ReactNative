import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image, Dimensions, Platform, StatusBar  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient  from 'react-native-linear-gradient';
import {withNavigation} from 'react-navigation' 

export default class UserPage extends  React.Component
{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            checkTextInputChange: false,
            secureTextEntry: true 
        };
    }

    componentDidMount(){
       
    }

    textInputChanged = (value) => {
        if(value.length > 0){
            this.setState({
                email: value,
                checkTextInputChange: true,
            })
        }
        else{
            this.setState({
                email: value,
                checkTextInputChange: false,
            })
        }
    }

    handlePasswordText = (value) => {
        this.setState({
            password: value,
        });
    }

    updateSecureTextEntry = (value) => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
        })
    }

    render(){
        return(
            
            <LinearGradient colors={["#045DE9", "#63A4FF"]}  style={styles.container}>
                <StatusBar backgroundColor="#045DE9" barStyle='light-content' />
                <View style={styles.header}>
                </View>
                <View style={styles.footer}>
                    <View style={styles.userImageSection}>
                        <Image style={styles.userImage} source={require('../assets/avatar.png')}/>
                        <View style={{marginTop: 20}}></View> 
                        <Text style={styles.textFooter}> User Name </Text>
                        <View style={{marginTop: 10}}></View> 
                    </View>


                   
                    <View style={styles.action}>
                        <Text style={styles.actionItems} >Posts 0</Text>
                        
                        <Text style={styles.actionItems} >Following 0</Text>
                        
                        <Text style={styles.actionItems} >Follwers 0</Text>
                    </View>

                   
                  
                </View>
               
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1E90FF',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    textHeader:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
    },
    textFooter: {
        fontWeight: 'bold',
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionItems: {
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        textAlign:'center',
        fontSize: 16,
       
    },
    
    userImageSection: {
        alignItems: 'center',
        padding: 0,
        marginTop: -80,
        
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',   
    },

    userImage:{
        height: 90,
        width: 90,
        padding: 30,
        backgroundColor: 'white',
        borderRadius: 64,
        borderWidth: 1,
        borderColor: '#777',
    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS == 'ios'? 0 : -12,
        paddingLeft: 10,
        color: '#25375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    skipButtonText:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    skipButton:{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 16
    }
});