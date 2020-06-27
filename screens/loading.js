import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {globalStyles} from '../styles/global';

export default function Loading({navigation})
{

    const waitLoading = () => {
        setTimeout(function(){
            navigation.navigate('main');
        }, 3000);
    }
    
    waitLoading();

    return(
        <View style={globalStyles.mainContainer}>
        <View style={globalStyles.centerContainer}>
          <Image style={globalStyles.loadingLogoImage} source={require('../assets/sing.png')}/>
        </View>
        </View>
    );
}