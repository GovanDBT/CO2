import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text, SafeAreaView, Image } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

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
        <View style={styles.nav}>
                
                <TouchableOpacity style={styles.aiIcon}>
                    <Image style={styles.watson} source={require('../../assets/watsonWhite.png')} />
                </TouchableOpacity>

                <View style={styles.search}></View> 
            </View>
        <View style={styles.buttonView}>
          <AppButton title="Global" onPress={() => console.log("Tapped Global")} color='secondary' textColor='white' icon="globe-africa" iconColor="#fff" />
          <AppButton title="My Region" onPress={() => console.log("Tapped Regional")} icon="map-marker-alt" />
        </View>

        <Onboarding />

        <View style={styles.select}>
          {!!selected && (<Text>Selected Value: {selected} </Text>)}
          <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={data}
            save="value"
            placeholder='Countries'
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
  select: {
    marginBottom: 30,
  },
  buttonView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  nav: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  search: {
    backgroundColor: '#fff', 
    borderRadius: 30,
    width: 245,
    height: 35,
    justifyContent: 'center',   
  },
  aiIcon: {
    backgroundColor: colors.secondary,
    padding: 8,
    borderRadius: 30,
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
  },
  watson: {
    height: 35,
    width: 35,
  }
})

export default HomeScreen;