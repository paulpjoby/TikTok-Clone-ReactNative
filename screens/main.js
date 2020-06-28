import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import VideoPlayback from '../components/VideosPlayback';
import convertToProxyURL  from 'react-native-video-cache';

export default class Main extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      videoList: [],
      error: null,
      page: 0,
      rows: 4
    }
  }
  

 async getVideosFromServer() {
    setTimeout(()=> {
      fetch('http://192.168.1.8/tiktok/videos/')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          videoList: [...this.state.videoList, ...responseJson],
          isLoading: false,
        });
      })
      .catch(error => {
        this.setState({ error: 'No Network !' });
      })
    } , 3000);
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    this.getVideosFromServer();
  }

  render() {
    return (
      <View style={styles.loadingData}>
        {this.state.isLoading  && this.state.videoList.length <= 0 ? <View><Text> Loading Data </Text></View> : <VideoPlayback videoList={this.state.videoList} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingData: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  }
});