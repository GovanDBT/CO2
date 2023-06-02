import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text, SafeAreaView, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
// import the AI component
import AI from '../components/AI';
import HomeScreen from './HomeScreen';

function RegionSection({ navigation }) {
  const [selected, setSelected] = useState("");
  
  const data = [
      {key:'1', value:'Mobiles'},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers'},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ];

    return (
      <Screen>
        <AI />
        <View style={styles.buttonView}>
          <AppButton title="Global" onPress={() => navigation.navigate('Home')} icon="globe-africa" />
          <AppButton title="My Region" onPress={() => navigation.navigate('Region')} color='secondary' textColor='white' iconColor="#fff" icon="map-marker-alt" />
        </View>

        <View>
            <TouchableOpacity style={styles.locationButton} onPress={() => console.log("Tapped Share")}>
                <FontAwesome5 name="share" size={18} color={'white'} />
            </TouchableOpacity>

            <View >
          <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data}
                    placeholder='Select your Region'
                    save="value"
                    arrowicon={<FontAwesome5 name="caret-down" size={20} color={'white'} />}
                    boxStyles={{backgroundColor: colors.secondary, borderColor: 0, color: colors.white, width: 95, height: 45,}}
                    inputStyles={{color: colors.white, fontWeight: 'bold', }}
                    dropdownStyles={{backgroundColor: colors.accent, borderColor: 0, width: 95,}}
                    dropdownTextStyles={{color: colors.white, }}
                    searchPlaceholderStyles={{color: colors.white}}
                    search={false}
                />
        </View>

            
        </View>

        <Onboarding />

        <View style={styles.select}>
          {!!selected && (<Text>Selected Value: {selected} </Text>)}
          <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={data}
            save="value"
            placeholder='Activities'
            arrowicon={<FontAwesome5 name="caret-down" size={20} color={'white'} />}
            closeicon={<FontAwesome5 name="times" size={20} color={'white'} />}
            boxStyles={{backgroundColor: colors.accent, borderColor: colors.primary, borderStartWidth: 3, borderStartColor: colors.secondary, color: colors.white }}
            inputStyles={{color: colors.white, fontWeight: 'bold'}}
            dropdownStyles={{backgroundColor: colors.accent, borderColor: 0,}}
            dropdownTextStyles={{color: colors.white, }}
            searchPlaceholderStyles={{color: colors.white}}
          />
        </View>

        <View style={styles.select}>
          {!!selected && (<Text>Selected Value: {selected} </Text>)}
          <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={data}
            save="value"
            placeholder='Companies'
            arrowicon={<FontAwesome5 name="caret-down" size={20} color={'white'} />}
            closeicon={<FontAwesome5 name="times" size={20} color={'white'} />}
            boxStyles={{backgroundColor: colors.accent, borderColor: colors.primary, borderStartWidth: 3, borderStartColor: colors.secondary, color: colors.white }}
            inputStyles={{color: colors.white, fontWeight: 'bold'}}
            dropdownStyles={{backgroundColor: colors.accent, borderColor: 0,}}
            dropdownTextStyles={{color: colors.white, }}
            searchPlaceholderStyles={{color: colors.white}}
          />
        </View>

        <View style={styles.select}>
          {!!selected && (<Text>Selected Value: {selected} </Text>)}
          <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={data}
            save="value"
            placeholder='Products'
            arrowicon={<FontAwesome5 name="caret-down" size={20} color={'white'} />}
            closeicon={<FontAwesome5 name="times" size={20} color={'white'} />}
            boxStyles={{backgroundColor: colors.accent, borderColor: colors.primary, borderStartWidth: 3, borderStartColor: colors.secondary, color: colors.white }}
            inputStyles={{color: colors.white, fontWeight: 'bold'}}
            dropdownStyles={{backgroundColor: colors.accent, borderColor: 0,}}
            dropdownTextStyles={{color: colors.white, }}
            searchPlaceholderStyles={{color: colors.white}}
          />
        </View>

      </Screen>
    );
}

const styles = StyleSheet.create({
    locationButton: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 100,
    },
  select: {
    marginBottom: 30,
  },
  buttonView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
  },
  
  
  
  
})

export default RegionSection;