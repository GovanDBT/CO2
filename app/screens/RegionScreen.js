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
import Slider from '../components/Slider';
// import the screen
import Screen from './Screen';
// import the AI component
import AI from '../components/AI';

function RegionScreen({ navigation }) {
  const [selected, setSelected] = useState("");
  
  const data = [
      {key:'1', value:'Botswana'},
      {key:'2', value:'Canada'},
      {key:'3', value:'Angola'},
      {key:'4', value:'England'},
      {key:'5', value:'China'},
      {key:'6', value:'Brazil'},
      {key:'7', value:'USA'},
  ];

  const data2 = [
      {key:'1', value:'Hunting'},
      {key:'2', value:'Farming'},
      {key:'3', value:'Meat Production'},
      {key:'4', value:'Power Production'},
      {key:'5', value:'Traveling'},
      {key:'6', value:'Tourism'},
      {key:'7', value:'Sports'},
  ];

  return (
    <Screen>
      {/** AI Component */}
      <AI />

      {/** Global and My Region Buttons */}
      <View style={styles.buttonView}>
        <AppButton title="Global" onPress={() => navigation.navigate('Home')} icon="globe-africa" />
        <AppButton title="My Region" onPress={() => navigation.navigate('Region')} color='secondary' textColor='white' iconColor="#fff" icon="map-marker-alt" />
      </View>

      {/** Drop down list for users to select their region */}
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data}
        placeholder='Select your Region'
        save="value"
        arrowicon={<FontAwesome5 name="caret-down" size={20} color={colors.primary} />}
        boxStyles={{backgroundColor: colors.white, borderColor: 0, height: 45, justifyContent: 'center', margin: 10, }}
        inputStyles={{color: colors.primary, fontWeight: 'bold', marginHorizontal: 10, }}
        dropdownStyles={{backgroundColor: colors.accent, borderColor: 0, marginTop: 2,}}
        dropdownTextStyles={{color: colors.white, }}
        searchPlaceholderStyles={{color: colors.primary}}
        searchPlaceholder="Search your region"
      />

      {/** The slider */}
      <Slider />
      
      {/** The activities drop down menu */}
      <View style={styles.select}>
        {!!selected && (<Text>Selected Value: {selected} </Text>)}
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data2}
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
      
      {/** The companies drop down menu */}
      <View style={styles.select}>
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

      {/** The products drop down menu */}
      <View style={styles.select}>
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
  buttonView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  locationButton: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 100,
  },
  select: {
    marginBottom: 30,
  },
})

export default RegionScreen;