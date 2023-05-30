import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants';

// import react icons
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../config/colors';

function Screen({ children }) {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.nav}>
                
                <TouchableOpacity style={styles.searchIcon}>
                    <FontAwesome5  name="brain" size={25} color="#fff"/>
                </TouchableOpacity>

                <View style={styles.search}></View>

                <TouchableOpacity>
                    <FontAwesome5 name="bars" size={35} color={colors.secondary}/>
                </TouchableOpacity>   
            </View>
            <ScrollView>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingTop: Constants.statusBarHeight,
    },
    nav: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        top: 10,
        marginBottom: 30,
    },
    search: {
        backgroundColor: '#fff', 
        borderRadius: 30,
        width: 245,
        height: 35,
        justifyContent: 'center',
        
    },
    searchIcon: {
        backgroundColor: colors.secondary,
        width: 39,
        padding: 5,
        borderRadius: 30,
        marginLeft: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Screen;