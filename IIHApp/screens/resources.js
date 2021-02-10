/**
 * IIH App
 * App for people suffering with IIH (Idiopathic Intracanial Hypertension) and other rare diseases
 * Created for Mony Borcsa at We Are Rare Gems, https://www.weareraregems.com/
 * 
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
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import FlatButton from '../shared/button';


export default function Resources () {

  const [resource, setResource] = useState ([
    {name: 'We Are Rare Gems', icon: require('../assets/raregems-logo.png'), url: 'https://www.weareraregems.com', key: '1' },
    {name: 'WebMD', icon: require('../assets/webmd_logo.png'), url: 'https://www.webmd.com/brain/pseudotumor-cerebri#1', key: '2' },
    {name: 'NIH', icon: require('../assets/NIH-icon.png'), url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/idiopathic-intracranial-hypertension', key: '3' },
    {name: 'NORD', icon: require('../assets/nord-logo.webp'), url: 'https://rarediseases.org/rare-diseases/idiopathic-intracranial-hypertension/', key: '4' }, 
  ]);
     
     return (
       <View style={styles.pageView}>
        <Text style={styles.title}>Resources</Text>
        <FlatList
            numColumns={2}
            data={resource}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                <Image style={styles.logo} source={ item.icon } />
              </TouchableOpacity>
            )}
          />
        </View>
    )
 
  }

  const styles = StyleSheet.create ({
    pageView:{
      flex: 1,
      flexDirection: 'column',  // top to bottom orientation (this is default)
      alignItems: 'center',  // works in cross axis direction, in this case will be centered vertically
      justifyContent: 'center', // works in axis direction, in this case will be centered horizontally
      backgroundColor: 'snow',
    },
    title: {
      fontSize: 30,
      marginBottom: 20,
      marginTop: 20,
      fontFamily: 'sans-serif-medium',
      //color: 'blue',
    },
    logo: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      marginRight: 20,
    },
  })