/**
 * IIH App
 * App for people suffering with IIH (Idiopathic Intracanial Hypertension) and other rare diseases
 * Created for Mony Borcsa at We Are Rare Gems, https://www.weareraregems.com/
 * 
 * For those who are suffering, you are not forgotten
 * 
 * By: Terri Kellerman, Wed February 3rd, 2021  
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
import About from './screens/about';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './shared/header';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
           screenOptions={{
              headerTitle:() => <Header />, // if placed here, also shows on Review Details page
              headerStyle: {
                height: 50,
                backgroundColor: 'pink',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} 
        >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Resources" component={Resources} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;

