/**
 * IIH App
 * App for people suffering with IIH (Idiopathic Intracanial Hypertension) and other rare diseases
 * Created for Mony Borcsa at We Are Rare Gems, https://www.weareraregems.com/
 * For those who are suffering, you are not forgotten
 * 
 * File: about.js - Mony's journey
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

export default function About () {
    return (
      <View style={styles.aboutView}>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.info}>
            I'm Mony B. I was was diagnosed with Idiopathic Intracranial Hypertension (IIH), 
            otherwise known as Pseudo-Tumor Cerebri. This condition effects only 1 out of 100,000. 
            I am now committed to building a community of “gems”, forged in the fight against rare 
            diseases.  {"\n"}{"\n"}Join this vibrant community and turn your battle into a force for good. </Text>     
      </View>
    )
  }

  const styles = StyleSheet.create ({
    aboutView:{
      flex: 1,
      //flexDirection: 'row',  // left to right orientation
      alignItems: 'center',  // works in cross axis direction, in this case will be centered vertically
      justifyContent: 'flex-start', // works in axis direction, in this case will be centered horizontally
      //flexWrap: 'wrap',
      backgroundColor: 'snow',
      marginTop: 20,
    },
    info: {
      fontSize: 20,
      marginBottom: 20,
      marginRight: 20,
      marginLeft: 20,
      fontFamily: 'sans-serif-medium',
      //color: 'blue',
    },
    title: {
      fontSize: 25,
      marginBottom: 20,
      flexWrap: 'wrap',
      textAlign: 'center',
      fontFamily: 'sans-serif-light',
      fontWeight: 'bold',
      fontStyle: 'italic',
    }
  })