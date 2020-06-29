import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';

export default class Upload extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    checkLogin = () => {

    }

    signOut = () => {

    }

    render(){
        return(
            <View style={styles.mainContent}>
                <RNCamera  style={styles.mainContent} captureAudio={false}/>
            </View>
        );
    }

    componentDidMount(){

    }
}

const styles= StyleSheet.create({
    mainContent:{
        height: "100%",
        width: "100%",
    }
});