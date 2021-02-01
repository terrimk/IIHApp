/**
 * IIH App
 * App for people suffering with IIH (Idiopathic Intracanial Hypertension) and other rare diseases
 * Created for Mony Borcsa at We Are Rare Gems, https://www.weareraregems.com/
 * For those who are suffering, you are not forgotten
 * 
 * File: home.js - first screen user sees when opening app
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

export default function Home () {
    return (
      <View style={styles.homeView}>
        <Text style={styles.title}>We Are Rare Gems</Text>
        <Text style={styles.subtitle}>Find Strength In Your Battle Against {"\n"}Rare Diseases</Text>
        <Image source={require('../assets/lady-gem1.png')} style={styles.homeImage}></Image>
       
      </View>
    )
  }
  
 
  const styles = StyleSheet.create ({
    homeView:{
      flex: 1,
      //flexDirection: 'row',  // left to right orientation
      alignItems: 'center',  // works in cross axis direction, in this case will be centered vertically
      justifyContent: 'center', // works in axis direction, in this case will be centered horizontally
      //flexWrap: 'wrap',
      backgroundColor: 'snow',
    },
    homeImage: {
      width: 400,
      height: 400,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 40,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      //borderRadius: 70,
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
      fontFamily: 'sans-serif-medium',
      //color: 'blue',
    },
    subtitle: {
      fontSize: 20,
      marginBottom: 20,
      flexWrap: 'wrap',
      textAlign: 'center',
      fontFamily: 'sans-serif-light',
      fontWeight: 'bold',
      fontStyle: 'italic',
    }
  })

 