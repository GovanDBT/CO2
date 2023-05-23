/** Designing the buttons */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// import colors
import colors from '../config/colors';

function AppButton({title, onPress, color= "white", textColor="primary"}) {
    return (
        // give feedback whenever we press a button
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style={[styles.text, {color: colors[textColor]}]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        backgroundColor: colors.white,
        padding: 10,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.primary,
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppButton;