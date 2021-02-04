/**
 * IIH App
 * App for people suffering with IIH (Idiopathic Intracanial Hypertension) and other rare diseases
 * Created for Mony Borcsa at We Are Rare Gems, https://www.weareraregems.com/
 * For those who are suffering, you are not forgotten
 * 
 * File: resources.js - links to external, helpful resources
 * 
 * By: Terri Kellerman, February 2021
 */

import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  Linking
} from 'react-native';
import FlatButton from '../shared/button';

const raregemsURL = "https://www.weareraregems.com";
const webmdURL = "https://www.webmd.com/brain/pseudotumor-cerebri#1";
const nihURL = "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/idiopathic-intracranial-hypertension";
const nordURL = "https://rarediseases.org/rare-diseases/idiopathic-intracranial-hypertension/";

export default function Resources () {
    return (
      <View style={styles.pageView}>
        <Text style={styles.title}>Resources</Text>
            <View style={styles.buttonView}>  
              <FlatButton style={styles.button1} text='We Are Rare Gems' onPress={() => Linking.openURL(raregemsURL)} />
              <FlatButton text='WebMD' onPress={() => Linking.openURL(webmdURL)} /> 
            </View>
            <View style={styles.buttonView}> 
              <FlatButton text='NIH' onPress={() => Linking.openURL(nihURL)} /> 
              <FlatButton text='NORD' onPress={() => Linking.openURL(nordURL)} /> 
            </View>
      </View>
    )
  }

  const styles = StyleSheet.create ({
    pageView:{
      flex: 1,
      flexDirection: 'column',  // top to bottom orientation (this is default)
      alignItems: 'center',  // works in cross axis direction, in this case will be centered vertically
      justifyContent: 'flex-start', // works in axis direction, in this case will be centered horizontally
      flexWrap: 'wrap',
      backgroundColor: 'snow',
    },
    buttonView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    button1:{
      alignSelf: 'flex-end',
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
      marginTop: 20,
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