import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions, Platform, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient  from 'react-native-linear-gradient';

export default class Login extends  React.Component
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
                    <Text style={styles.textHeader}> Welcome! </Text>
                    <Animatable.Text animation="bounceIn" iterationCount={3} direction="alternate" style={{marginLeft:10 , color: '#fff'}} >Create and Share</Animatable.Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.textFooter}> Email </Text>
                    <View style={styles.action}>
                        <Icon name = "user-o" color="#05375a" size={20}/>
                        <TextInput 
                            placeholder="Your Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => this.textInputChanged(val)} 
                        />
                        {this.state.checkTextInputChange ?
                        <Animatable.View animation="bounceIn">
                            <Feather name = "check-circle" color="green" size={20}/>
                        </Animatable.View>
                        : null}
                    </View>
                    <Text style={[styles.textFooter, {marginTop:35}]}> Password </Text>
                    <View style={styles.action}>
                        <Feather name = "lock" color="#05375a" size={20}/>
                        <TextInput 
                            secureTextEntry={this.state.secureTextEntry}
                            placeholder="Password"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(value)=> this.handlePasswordText(value)}
                        />
                        <TouchableOpacity onPress={this.updateSecureTextEntry}>
                            {this.state.secureTextEntry? 
                            <Feather name = "eye-off" color="grey" size={20}/>
                            :<Feather name = "eye" color="grey" size={20}/> }

                        </TouchableOpacity>
                        
                    </View>

                   <TouchableOpacity>
                    <View style={styles.button}>
                        <LinearGradient
                            colors={["#83EAF1", "#63A4FF"]}
                            style={styles.signIn}
                            >
                            <Text style={[styles.textSign, {color:'#FFF'}]}> Sign In </Text>
                        </LinearGradient>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                            onPress = {() => {this.props.navigation.push('register')}}
                            style={[styles.signIn, {borderColor: '#08d4c4', borderWidth: 1,  marginTop: 15} ]}
                            >
                            <Text style={styles.textSign}> Register </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.skipButton}>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} 
                        onPress={() => { this.props.navigation.replace('main'); }}
                        >
                                <Text style={styles.skipButtonText}>SKIP  </Text> 
                                <Icon5 name="play" color="#fff" size={14}/>
                    </TouchableOpacity>
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
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
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