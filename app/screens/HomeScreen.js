import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text, SafeAreaView} from 'react-native';

// import colors were using
import colors from '../config/colors';
// import react icons
import { FontAwesome5 } from '@expo/vector-icons';
// import custom buttons
import AppButton from '../components/AppButton';
// import slide
import Onboarding from '../components/Onboarding';

function HomeScreen(props) {
    return (
      <SafeAreaView>
        <View style={styles.nav}>
          <View style={styles.search}>
            <TouchableOpacity style={styles.searchIcon}>
              <FontAwesome5  name="brain" size={25} color="#fff"/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => console.log("Bar Tapped")}>
            <FontAwesome5 name="bars" size={35} color={colors.secondary}/>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.buttonView}>
            <AppButton title="Global" onPress={() => console.log("Tapped Global")} color='secondary' textColor='white'/>
            <AppButton title="Regional" onPress={() => console.log("Tapped Regional")}/>
          </View>
          <Onboarding />
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  buttonView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
    height: 45,
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
})

export default HomeScreen;