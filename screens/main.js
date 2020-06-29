import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import VideoPlayback from '../components/VideosPlayback';
import convertToProxyURL from 'react-native-video-cache';

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      videoList: [],
      error: null,
      page: 0,
      rows: 4,
      failedToLoad: false,
    }
  }


  async getVideosFromServer() {
    fetch('http://192.168.1.8/tiktok/videos/')
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({
        videoList: [...this.state.videoList, ...responseJson],
        isLoading: false,
      });
    })
    .catch(error => {
      console.log(error);
      this.setState({ error: 'No Network !', failedToLoad: true });
    })
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
        <StatusBar backgroundColor="#000000" barStyle='light-content' />
        {this.state.isLoading && this.state.videoList.length <= 0 ?
          <View>
            <Animatable.Image animation="bounce" duration={3000} iterationCount="infinite" style={styles.loadingImage} source={require('../assets/stream.png')} />
            {this.state.failedToLoad ?
              <TouchableOpacity style={[styles.retryButton, { borderColor: '#E61D8C', borderWidth: 1, marginTop: 15 }]} onPress={() => { this.setState({ failedToLoad: false }); this.getVideosFromServer(); }}>
                <Text>Retry</Text>
              </TouchableOpacity>
              : null}
          </View> :
          <VideoPlayback videoList={this.state.videoList} />}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  loadingData: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center',

  },
  loadingImage: {
    height: 80,
    width: 80,
  },
  retryButton: {
    height: 40,
    width: 80,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});