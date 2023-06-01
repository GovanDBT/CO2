import React from 'react';
import { Text, View, StyleSheet, Image, useWindowDimensions } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';
// import react icons
import { FontAwesome5 } from '@expo/vector-icons';

function Onboarding({item}) {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={styles.image} />
            <AppText style={styles.caption}>{item.caption}</AppText>
            <View style={styles.label}>
                <AppText style={styles.title}>{item.title}</AppText>
                <AppText style={styles.amount}>{item.amount}</AppText>
                <AppText style={styles.person}>{item.person}</AppText>
                <View style={styles.approximate}>
                    <FontAwesome5  name={item.icon} size={22} color="#fff"/>
                    <AppText style={styles.approx}>{item.approx}</AppText>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    amount: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 35,
        marginVertical: 7,
    },
    approx: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10,
    },
    approximate: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
    },
    caption: {
        fontSize: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        color: colors.white,
        width: 200,
    },
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300,
        marginVertical: 20,
    },
    label: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingRight: 18,
    },
    person: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 20,
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default Onboarding;