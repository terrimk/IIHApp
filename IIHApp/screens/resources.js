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

import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  Linking,
  FlatList
} from 'react-native';
import FlatButton from '../shared/button';

const [url, setURL] = useState ([
  {name: 'We Are Rare Gems', url: 'https://www.weareraregems.com', key: '1' },
  {name: 'WebMD', url: 'https://www.webmd.com/brain/pseudotumor-cerebri#1', key: '2' },
  {name: 'NIH', url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/idiopathic-intracranial-hypertension', key: '3' },
  {name: 'NORD', url: 'https://rarediseases.org/rare-diseases/idiopathic-intracranial-hypertension/', key: '4' }, 
]);

const raregemsURL = "https://www.weareraregems.com";
const webmdURL = "https://www.webmd.com/brain/pseudotumor-cerebri#1";
const nihURL = "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/idiopathic-intracranial-hypertension";
const nordURL = "https://rarediseases.org/rare-diseases/idiopathic-intracranial-hypertension/";

export default function Resources () {
    return (
      <Text style={styles.title}>Resources</Text>

      <FlatList
        data={raregemURL}
      />

    )

      // FIRST ATTEMPT AT LINK DISPLAY START
      // <View style={styles.pageView}>
      //   <Text style={styles.title}>Resources</Text>
      //       <View style={styles.buttonView}>  
      //         <FlatButton style={styles.button1} text='We Are Rare Gems' onPress={() => Linking.openURL(raregemsURL)} />
      //       {/* </View>  
      //       <View style={styles.buttonView}>  */}
      //           <FlatButton style={styles.button2} text='WebMD' onPress={() => Linking.openURL(webmdURL)} /> 
      //       </View>
      //       <View style={styles.buttonView}> 
      //         <FlatButton text='NIH' onPress={() => Linking.openURL(nihURL)} />
      //       {/* </View> 
      //       <View style={styles.buttonView}>  */}
      //         <FlatButton text='NORD' onPress={() => Linking.openURL(nordURL)} /> 
      //       </View>
      // </View>
      // FIRST ATTEMPT AT LINK DISPLAY END
    
  }

  const styles = StyleSheet.create ({
    pageView:{
      flex: 1,
      flexDirection: 'column',  // top to bottom orientation (this is default)
      alignItems: 'center',  // works in cross axis direction, in this case will be centered vertically
      justifyContent: 'center', // works in axis direction, in this case will be centered horizontally
      backgroundColor: 'snow',
    },
    buttonView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginRight: 20,
    },
    button1:{
      alignSelf: 'flex-start',
    },
    button2:{
      alignSelf: 'flex-end',
      backgroundColor: '#f05d91',
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