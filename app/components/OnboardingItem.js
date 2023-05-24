import React from 'react';
import { Text, View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Onboarding({item}) {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={styles.image} />
            <AppText style={styles.title}>{item.title}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
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
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        color: colors.white,
        width: 200,
    },
});

export default Onboarding;