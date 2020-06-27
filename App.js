import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigator from './routes/homeStack';


      // <StatusBar barStyle="dark-content" />
      // <SafeAreaView>
        
      // </SafeAreaView>
    



export default function App()
{
  return(
    <Navigator />
  );
}
