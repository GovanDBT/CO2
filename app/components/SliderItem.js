/** Slider Items */
import React, { useState } from 'react';
import { View, StyleSheet, Image, useWindowDimensions, Share, TouchableOpacity } from 'react-native';

// import custom colors
import colors from '../config/colors';
// import custom text
import AppText from './AppText';
// import react-native icons
import { FontAwesome5 } from '@expo/vector-icons';

function SliderItem({item}) {
    const { width } = useWindowDimensions();

    {/** When a user wants to share the content of the app */}
    const onShare = async () => {
        try {
        const result = await Share.share({
            message: 'Instagram | A time wasting application',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
            // shared with activity type of result.activityType
            } else {
            // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
        } catch (error) {
        alert(error.message);
        }
    };

    const [shouldShow, setShouldShow] = useState(true);
    return (
        <View style={[styles.container, { width }]}>
            <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                <FontAwesome5 name="share" size={25} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chartButton} onPress={() => setShouldShow(!shouldShow)}>
                {shouldShow ? (
                    <FontAwesome5 name="chart-line" size={25} color={'white'} />
                ): <FontAwesome5 name="weight-hanging" size={25} color={'white'} />}
            </TouchableOpacity>
            {shouldShow ? (
                <View style={styles.container}>
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
            ) : <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
            }}
            style={{ width: 250, height: 250 }}
          />}
            
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
    chartButton: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 100,
        position: 'absolute',
        bottom: 5,
        right: 10,
        zIndex: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        marginLeft: 22,
    },
    label: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    person: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 20,
    },
    shareButton: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 100,
        position: 'absolute',
        top: 25,
        right: 10,
        zIndex: 1,
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default SliderItem;