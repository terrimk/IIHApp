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
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Community':
      return 'Community';
    case 'Resources':
      return 'Resources';
    case 'About':
      return 'You Are Not Alone.';
  }
}

const Tab = createBottomTabNavigator();

function HomeTabs({ navigation, route }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
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
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Resources" component={Resources} />
        <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
        </NavigationContainer>
          );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="Resources" component={Resources} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//ORIGINAL TAB NAV
// //const App: () => React$Node = () => {
//   export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//               screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                   let iconName;

//                   if (route.name === 'Home') {
//                     iconName = focused ? 'home' : 'home-outline';
//                   } else if (route.name === 'Community') {
//                     iconName = focused ? 'people-circle' : 'people-circle-outline';
//                   } else if (route.name === 'Resources') {
//                     iconName = focused ? 'information-circle' : 'information-circle-outline';
//                   } else if (route.name === 'About') {
//                     iconName = focused ? 'heart-circle' : 'heart-circle-outline';
//                   }
//                  // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'cornflowerblue',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen name="Home" component={Home}  />
//         <Tab.Screen name="Community" component={Community} />
//         <Tab.Screen name="Resources" component={Resources} />
//         <Tab.Screen name="About" component={About} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

//export default App;

