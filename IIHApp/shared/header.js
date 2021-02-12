/**
 * IIH App
 * App for people suffering with IIH (Idiopathic Intracanial Hypertension) and other rare diseases
 * Created for Mony Borcsa at We Are Rare Gems, https://www.weareraregems.com/
 * 
 * For those who are suffering, you are not forgotten
 * 
 * File: header.js - header shared across all screens except for home
 * 
 * By: Terri Kellerman, February 2021
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }){

    return(
            <View style={styles.header}>
                {/*title is added dynamically depending on page, i.e. Home or About  */}
                <Text style ={styles.headerText}>{ title }</Text>  
            </View>
    )
}

// header style will only apply to the header section that comes with stack navigation 
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',  // left to right orientation
        alignItems: 'center',  // works in cross axis direction, in this case will be centered vertically
        justifyContent: 'center', // works in axis direction, in this case will be centered horizontally
        backgroundColor: '#f4511e',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 6,
    },
    headerImage:{
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
    headerTitle:{
        flexDirection: 'row',
    }
})