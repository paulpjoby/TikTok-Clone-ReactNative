import React, {useState} from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import {globalStyles} from '../styles/global';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export default class Loading extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            navigation: null,
        }
    }
    
    componentDidMount(){
        this.setState({
            navigation: this.props.navigation,
        }) 
    
    }

    waitLoading  = () => {
        this.props.navigation.replace('login');
    }   

    componentDidUpdate(){
        setTimeout(() => {
            this.waitLoading();
        }, 3000);
    }

    render(){
   
        return(
        
            <LinearGradient style={globalStyles.mainContainer} colors={["#E61D8C","#C7E9FB"]}>
            <StatusBar backgroundColor="#E61D8C" barStyle='light-content' />
            <View style={globalStyles.centerContainer}>
                <Animatable.Image animation="wobble"  duration={3000} iterationCount="infinite" style={globalStyles.loadingLogoImage} source={require('../assets/tiktok.png')}/>
               
            </View>
            </LinearGradient>
        );
    }

    
}


const styles = StyleSheet.create({
    text:{
        marginTop:18,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
});