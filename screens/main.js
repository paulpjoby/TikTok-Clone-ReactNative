import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Video from 'react-native-video';
import { globalStyles } from '../styles/global';
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/FontAwesome';
import VideoPlayback from '../components/VideosPlayback';

export default class Main extends React.Component {

  state = {
    isLoading: false,
    videoList: [],
    error: null,
    page: 0,
    rows: 4
  }

  getVideosFromServer() {
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
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    this.getVideosFromServer();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading  && this.state.videoList.length <= 0 ? <Text> Loading Data </Text> : <VideoPlayback videoList={this.state.videoList} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});