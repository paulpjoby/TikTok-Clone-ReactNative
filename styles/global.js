import {StyleSheet, Dimensions} from 'react-native';

export const globalStyles = StyleSheet.create({
    mainContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#f1f1f1'
    },
    centerContainer :{
        marginTop: 'auto',
        marginBottom: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingLogoImage:{
        height: 100,
        width: 100,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    videoTouchController: {
        backgroundColor: '#000',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    mainPageButtonContainer: {
        position: 'absolute',
        top: Dimensions.get('window').height/3,
        right: 0,
    },
    mainPageBottomBar: {
        position: 'absolute',
        bottom:10,
        left:0,
        right: 0,
    },
    mainPageSideButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginRight: 16
    },
    // mainPageCommentButton: {
    //     marginTop: 24,
    //     marginBottom: 24,
    //     marginRight: 16
    // },
    // mainPageShareButton: {
    //     marginTop: 24,
    //     marginBottom: 24,
    //     marginRight: 16
    // }
});