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
// import the screen
import Screen from './Screen';

function HomeScreen(props) {
    return (
      <Screen>
        <View style={styles.buttonView}>
          <AppButton title="Global" onPress={() => console.log("Tapped Global")} color='secondary' textColor='white'/>
          <AppButton title="Regional" onPress={() => console.log("Tapped Regional")}/>
        </View>
        <Onboarding />
      </Screen>
    );
}

const styles = StyleSheet.create({
  buttonView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})

export default HomeScreen;