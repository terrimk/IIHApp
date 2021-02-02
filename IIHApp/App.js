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
import Home from './screens/home';
import Community from './screens/community';
import Resources from './screens/resources';


const App: () => React$Node = () => {
  return (
    <Resources />
  )
}

export default App;

