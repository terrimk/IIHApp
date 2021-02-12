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
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === 'Community') {
                    iconName = focused ? 'people-circle' : 'people-circle-outline';
                  } else if (route.name === 'Resources') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                  } else if (route.name === 'About') {
                    iconName = focused ? 'heart-circle' : 'heart-circle-outline';
                  }
                 // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'cornflowerblue',
          inactiveTintColor: 'gray',
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

