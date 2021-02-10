/**
 * IIH App
 * App for people suffering with IIH (Idiopathic Intracanial Hypertension) and other rare diseases
 * Created for Mony Borcsa at We Are Rare Gems, https://www.weareraregems.com/
 * 
 * For those who are suffering, you are not forgotten
 * 
 * File: community.js - TBD - possibly a forum area similar to Facebook or Reddit where people can
 *                                  hold ongoing discussions
 * 
 * By: Terri Kellerman, February 2021
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default function Community () {
    return (
      <View style={styles.communityView}>
        <Text style={styles.subtitle}>Community of Rare Gems</Text>
        <Text style={styles.title}>COMING SOON</Text>
        <Image source={require('../assets/underconstruction-copy.jpg')} style={styles.comingSoonImage}></Image>
       
      </View>
    )
  }

  const styles = StyleSheet.create ({
    communityView:{
      flex: 1,
      //flexDirection: 'row',  // left to right orientation
      alignItems: 'center',  // works in cross axis direction, in this case will be centered vertically
      justifyContent: 'center', // works in axis direction, in this case will be centered horizontally
      //flexWrap: 'wrap',
      backgroundColor: 'snow',
    },
    comingSoonImage: {
      width: 250,
      height: 250,
      borderRadius: 50,
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
      fontFamily: 'sans-serif-medium',
      //color: 'blue',
    },
    subtitle: {
      fontSize: 25,
      marginBottom: 20,
      flexWrap: 'wrap',
      textAlign: 'center',
      fontFamily: 'sans-serif-light',
      fontWeight: 'bold',
      fontStyle: 'italic',
    }
  })