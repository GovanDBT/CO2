import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';

// import colors were using
import colors from '../config/colors';
// import react icons
import { FontAwesome5 } from '@expo/vector-icons';

function HomeScreen(props) {
    return (
      <View style={styles.nav}>
        <View style={styles.search}>
          <FontAwesome5 style={styles.searchIcon} name="brain" size={25} color="#fff"/>
        </View>
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
    backgroundColor: '#fff', 
    borderRadius: 30,
    width: 245,
    height: 45,
    justifyContent: 'center',
  },
  searchIcon: {
    backgroundColor: colors.secondary,
    width: 39,
    padding: 5,
    borderRadius: 30,
    marginLeft: 4,
  },
})

export default HomeScreen;