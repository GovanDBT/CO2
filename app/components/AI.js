/** This is the AI component in the overview section which user interact with */
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

// import colors were using
import colors from '../config/colors';

export default function AI() {
  return (
    <View style={styles.nav}>
        {/** Watson Assistant button */}    
        <TouchableOpacity style={styles.aiIcon}>
            <Image style={styles.watson} source={require('../../assets/watsonWhite.png')} />
        </TouchableOpacity>
        
        <View style={styles.search}></View> 
    </View>
  )
}

const styles = StyleSheet.create({
    aiIcon: {
        backgroundColor: colors.secondary,
        padding: 8,
        borderRadius: 30,
        marginLeft: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.white,
    },
    nav: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'yellow',
    },
    search: {
        backgroundColor: '#fff', 
        borderRadius: 30,
        width: 245,
        height: 35,
        justifyContent: 'center',   
    },
    watson: {
        height: 35,
        width: 35,
    }
})