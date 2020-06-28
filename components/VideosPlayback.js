import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image ,Text, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/global';
import Video from 'react-native-video';
import Swiper from 'react-native-swiper'
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/FontAwesome';


const VideoPlayback = ({ videoList }) => {
   
    const [currentIndex, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    var initialItem = {};
    if(videoList.length > 0)
        initialItem = videoList[0]
    else
        initialItem = {}

    const [likes, setLikes] = useState(initialItem.likes);
    const [shares, setShares] = useState(initialItem.shares);
    const [author, setAuthor] = useState(initialItem.author);
    const [comments, setComments] = useState(initialItem.comments);
    const [music, setMusic] = useState(initialItem.music);
    const [description, setDescription] = useState(initialItem.description);
    const [hashTags, setHashTags] = useState(initialItem.description);
  
    const onIndexChangedHandler = (index) => {
        var video = videoList[index];
        setIndex(index)
        setAuthor(video.author);
        setDescription(video.description);
        setComments(video.comments);
        setHashTags(video.hashTags);
        setLikes(video.likes);
        setShares(video.shares);
        setMusic(video.music);
    } 

    return (
        <View style={globalStyles.mainContainer}>
            <Swiper
                automaticallyAdjustContentInsets={true}
                showsPagination={false}
                onIndexChanged={(index) => { onIndexChangedHandler(index); }}
                index={0}
                loop={false}
                horizontal={false} >
                {
                    videoList.map((video, index) => {
                        var url = 'http://192.168.1.8/tiktok/videos/' + video.videoItem;
                        return (
                            <View key={index} style={globalStyles.mainContainer} >
                                <TouchableOpacity  style={globalStyles.videoTouchController} onPress={()=> {setPaused((prevState) => !prevState )}} >
                                    <Video
                                        style={globalStyles.backgroundVideo}
                                        resizeMode="contain"
                                        repeat
                                        bufferConfig={{
                                            minBufferMs: 15000,
                                            maxBufferMs: 50000,
                                            bufferForPlaybackMs: 100,
                                            bufferForPlaybackAfterRebufferMs: 500
                                        }}
                                        source={{ uri:  url}}
                                        paused={Math.abs(index - currentIndex) > 2 || paused}
                                        currentIndex={currentIndex}
                                        muted={currentIndex == index ? false : true}
                                    />
                                    {
                                        paused ? ( <View  style={styles.pausedButton}><Icon name="play" size={100} color="#FFF"/></View>): (<View  style={styles.pausedButtonHide}></View>)
                                    }
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </Swiper>
            {/*---------- Side Controls Start---------------*/}
            <View style={globalStyles.mainPageButtonContainer}>

                <View style={globalStyles.mainPageSideButtons}>
                    <TouchableOpacity>
                        <Icon name="heart" size={36} color="#FFF" />
                    </TouchableOpacity>
                    <Text style={styles.basicText}>{likes}</Text>
                </View>


                <View style={globalStyles.mainPageSideButtons}>
                    <TouchableOpacity>
                        <Icon name="comment" size={36} color="#FFF" />
                    </TouchableOpacity>
                    <Text style={styles.basicText} >{comments}</Text>
                </View>

                <View style={globalStyles.mainPageSideButtons}>
                    <TouchableOpacity>
                        <Icon name="share" size={36} color="#FFF" />
                    </TouchableOpacity>
                    <Text style={styles.basicText} >{shares}</Text>
                </View>
            </View>
            {/*---------- Side Controls End---------------*/}

            {/*---------- Bottom Details Start ---------------*/}
            <View style={styles.content}>
                <View style={styles.InnerContent}>
                    <TouchableOpacity>
                        <Text style={styles.name}>{author}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.description} numberOfLines={5}>
                            {description}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.hashtags}>{hashTags}</Text>
                    <TouchableOpacity>
                        <Text style={styles.translate}>Transalate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.componentMusic}>
                        <View style={styles.imageIconMusic}>
                            <Icon name='music' style={styles.bottomMusicIcon} size={24} color="#FFF"/>
                            {/* <Image style={styles.bottomMusic} source={require('../assets/music.png')} /> */}
                        </View>
                        <TextTicker
                            style={styles.nameMusic}
                            duration={4000}
                            loop
                            bounce={false}
                            repeatSpacer={70}
                            marqueeDelay={1000}
                            shouldAnimateTreshold={40}>
                            {music}
                        </TextTicker>
                    </TouchableOpacity>
                </View>
            </View>

            {/*---------- Bottom Details End ---------------*/}

            
           
        </View>
    );
}

const styles = StyleSheet.create({
    pausedButton: {
            backgroundColor: '#000',
            opacity: 0.6,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top:0,
            bottom:0,
            left: 0, 
            right: 0,
            zIndex:0
    },
    pausedButtonHide: {
       display: 'none',
    },
    basicText: {
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

      bottomMusicIcon: {
        
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

export default VideoPlayback;