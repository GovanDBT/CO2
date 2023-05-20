import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';

// import colors were using
import colors from '../config/colors';

function HomeScreen(props) {
    return (
      <View style={styles.nav}>
        <View style={styles.search}/>
        <View style={styles.bars}/>
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