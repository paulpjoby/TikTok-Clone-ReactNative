import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import Video from 'react-native-video';
import {globalStyles} from '../styles/global';
import ViewPager from '@react-native-community/viewpager';
import TextTicker from 'react-native-text-ticker';
import  Icon from 'react-native-vector-icons/FontAwesome';


export default function Main()
{
    return (
        <SafeAreaView>
    <View> 
        <ViewPager style={globalStyles.mainContainer}
        orientation = 'vertical'

        initialPage={0}>
            <View key="1">
                <Video  source={{uri:'http://192.168.1.8/tiktok/videos/VID-20170715-WA0015.mp4'}}
                onBuffer={console.log("Buffering")}                // Callback when remote video is buffering
                onError={console.log("Error")}  
                playWhenInactive = {false}
                resizeMode='cover' 
                repeat={true}
                style={globalStyles.backgroundVideo}/>
            </View>
            <View key="2">
                <Video  source={{uri:'http://192.168.1.8/tiktok/videos/VID-20170715-WA0016.mp4'}}
                onBuffer={console.log("Buffering")}                // Callback when remote video is buffering
                onError={console.log("Error")}  
                playWhenInactive = {false}
                resizeMode='cover' 
                repeat={true}
                style={globalStyles.backgroundVideo}/>
            </View>
        </ViewPager>


        <View style={globalStyles.mainPageButtonContainer}>
            <TouchableOpacity>
                <View style = {globalStyles.mainPageSideButtons}>
                    <Icon name="heart"  size={36} color="#FFF" />
                    <Text style={styles.basicText}>1K</Text>
                </View>
                <View style = {globalStyles.mainPageSideButtons}>
                <Icon name="comment"  size={36} color="#FFF" />
                    <Text style={styles.basicText} >0</Text>
                </View>
                <View style = {globalStyles.mainPageSideButtons}>
                <Icon name="share"  size={36} color="#FFF" />
                    <Text style={styles.basicText} >10</Text>
                </View>
            </TouchableOpacity>
            
            
            
        </View>

        <View style={styles.content}>
                <View style={styles.InnerContent}>
                  <TouchableOpacity>
                    <Text style={styles.name}>"Author Name"</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.description} numberOfLines={5}>
                      "Description Goes Here"
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.hashtags}>#item</Text>
                  <TouchableOpacity>
                    <Text style={styles.translate}>Transalate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.componentMusic}>
                    <View style={styles.imageIconMusic}>
                     
                      <Image style={styles.bottomMusic} source={require('../assets/music.png')} />
                    </View>
                    <TextTicker
                      style={styles.nameMusic}
                      duration={4000}
                      loop
                      bounce={false}
                      repeatSpacer={70}
                      marqueeDelay={1000}
                      shouldAnimateTreshold={40}
                    >
                      I Don’t Care - Ed Sheeran Part Justin Bieber
                    </TextTicker>
                  </TouchableOpacity>
                </View>
              </View>
        

    </View>
        
    </SafeAreaView>  
    )
       
}


const styles = StyleSheet.create({
    basicText:{
        color: '#FFF',
    },

    content: {
      width: "75%",
      position: "absolute",
      left: 0,
      bottom: 0,
      zIndex: 3
    },

    InnerContent: {
      width: "100%",
      position: "relative",
      bottom: 0,
      justifyContent: "flex-end",
      paddingHorizontal: 10,
      flexDirection: "column"
    },
  
    name: { 
      color: "white", 
      marginVertical: 3, 
      fontSize: 15, 
      fontWeight: "bold" 
    },

    description: { 
      color: "white", 
      marginTop: 2, 
      fontSize: 15 
    },

    hashtags: { 
      color: "white", 
      fontWeight: "bold" 
    },

    componentMusic: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
      width: 190
    },

    imageIconMusic: {
      marginRight: 15
    },

    bottomMusic: {
      width: 20,
      height: 20,
      resizeMode: "contain"
    },
    nameMusic: {
      color: "white",
      fontSize: 15
    },
    translate: {
      fontWeight: "bold",
      color: "white",
      marginVertical: 5
    },

    contentIcon: {
      width: "20%",
      position: "absolute",
      bottom: 11,
      right: 0,
      alignItems: "center",
      zIndex: 3
    },

    contentIconProfile: {
      alignItems: "center",
      marginBottom: 2
    },
    
    iconMusic: {
      width: 50,
      height: 50,
      resizeMode: "cover",
      borderRadius: 30
    }
  });