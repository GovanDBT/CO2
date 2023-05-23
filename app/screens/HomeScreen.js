import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';

// import colors were using
import colors from '../config/colors';
// import react icons
import { FontAwesome5 } from '@expo/vector-icons';

function HomeScreen(props) {
    return (
      <View style={styles.nav}>
        <View style={styles.search}/>
        <FontAwesome5 name="bars" size={35} color={colors.secondary}/>
      </View>
    );
}

const styles = StyleSheet.create({
  nav: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 10,
  },
  search: {
    backgroundColor: 'tomato', 
    borderRadius: 30,
    width: 240,
    height: 70,
  },
  bars : {
    backgroundColor: 'blue',
    width: 80,
    height: 70,
  },
})

export default HomeScreen;