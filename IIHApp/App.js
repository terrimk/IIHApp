/**
 * IIH App
 * App for people suffering with IIH (Idiopathic Intracanial Hypertension) and other rare diseases
 * Created for Mony Borcsa at We Are Rare Gems, https://www.weareraregems.com/
 * For those who are suffering, you are not forgotten
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


const App: () => React$Node = () => {
  return (
    <View style={styles.homeView}>
      <Text style={styles.title}>We Are Rare Gems</Text>
      <Image source={require('./assets/gems2.jpg')} style={styles.homeImage}></Image>
      <Text style={styles.subtitle}>Find Strength In Your Battle Against Rare Diseases.</Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create ({
  homeView:{
    flex: 1,
    //flexDirection: 'row',  // left to right orientation
    alignItems: 'center',  // works in cross axis direction, in this case will be centered vertically
    justifyContent: 'center', // works in axis direction, in this case will be centered horizontally
  },
  homeImage: {
    width: 400,
    height: 400,
    borderRadius: 80,
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
  }
})