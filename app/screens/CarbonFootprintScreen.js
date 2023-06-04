/** screen that allows user to calculate their carbon emission */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list';

// import the custom screen component
import Screen from './Screen';
// import custom text
import AppText from '../components/AppText';
// import custom colors
import colors from '../config/colors';
// import react icons
import { FontAwesome5 } from '@expo/vector-icons';
// import custom Button
import AppButton from '../components/AppButton';

export default function CarbonFootprintScreen() {
  const [selected, setSelected] = useState("");

  const data = [
      {key:'1', value:'England'},
      {key:'2', value:'Botswana'},
      {key:'3', value:'South Africa'},
      {key:'4', value:'USA'},
      {key:'5', value:'Nigeria'},
      {key:'6', value:'Brazil'},
      {key:'7', value:'China'},
  ];
  return (
    <Screen>
      {/** screen title */}
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>Calculate Your Carbon Footprint</AppText>
      </View>

      {/** screen subTitle */}
      <View style={styles.subTitleContainer}>
        <AppText style={styles.subTitle}>Use the carbon footprint calculator below to find out your carbon emission and take action</AppText>
      </View>

      {/** Drop down list for users to select their country */}
        <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data}
          placeholder='Select your country'
          save="value"
          arrowicon={<FontAwesome5 name="caret-down" size={20} color={colors.primary} />}
          boxStyles={{backgroundColor: colors.white, borderColor: 0, height: 45, justifyContent: 'center', marginHorizontal: 20, }}
          inputStyles={{color: colors.primary, fontWeight: 'bold', marginHorizontal: 20,  }}
          dropdownStyles={{backgroundColor: colors.accent, borderColor: 0, marginTop: 2, }}
          dropdownTextStyles={{color: colors.white, }}
          searchPlaceholderStyles={{color: colors.primary}}
          searchPlaceholder="Search your country"
        />
        <View style={styles.hint}>
          <FontAwesome5 name="info-circle" size={15} color={colors.white} />
          <AppText style={styles.hintText}>Carbon Emission differs per country depending on how electricity is produced, food production, population, etc.</AppText>
        </View>

        <View style={styles.calculator}>
          <View style={{marginBottom: 10,}}>
            <View style={styles.calHeader}>
              <FontAwesome5 name="plane" size={15} color={colors.white} />
              <AppText style={styles.calHeaderText}>Air Travel</AppText>
            </View>
            
          </View>

          <View style={{marginBottom: 10,}}>
            <View style={styles.calHeader}>
              <FontAwesome5 name="car" size={15} color={colors.white} />
              <AppText style={styles.calHeaderText}>Car Travel</AppText>
            </View>
          </View>

          <View style={{marginBottom: 10,}}>
            <View style={styles.calHeader}>
              <FontAwesome5 name="ship" size={15} color={colors.white} />
              <AppText style={styles.calHeaderText}>Boat Travel</AppText>
            </View>
          </View>

          <View style={{marginBottom: 10,}}>
            <View style={styles.calHeader}>
              <FontAwesome5 name="home" size={15} color={colors.white} />
              <AppText style={styles.calHeaderText}>Home</AppText>
            </View>
          </View>

          <View style={{marginBottom: 10,}}>
            <View style={styles.calHeader}>
              <FontAwesome5 name="seedling" size={15} color={colors.white} />
              <AppText style={styles.calHeaderText}>Total</AppText>
            </View>
          </View>
        </View>
        
        <AppText style={styles.carbonTitle}> Average Emission Per Person (yearly)</AppText>
        <View style={styles.carbon}>
          <View style={{alignItems: 'center'}}>
            <AppText style={[styles.carbonMeasure, {backgroundColor: colors.secondary,}]}>Low</AppText>
            <AppText style={styles.carbonCount}>6,000 - 15,999</AppText>
          </View>

          <View>
            <AppText style={[styles.carbonMeasure, {backgroundColor: 'orange',}]}>Medium</AppText>
            <AppText style={styles.carbonCount}>16,000 - 21,999</AppText>
          </View>

          <View>
            <AppText style={[styles.carbonMeasure, {backgroundColor: 'red',}]}>High</AppText>
            <AppText style={styles.carbonCount}>22,000</AppText>
          </View>
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  calculator: {
    backgroundColor: colors.accent,
    borderRadius: 20,
    padding: 10,
  },
  calHeader: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  calHeaderText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  carbon: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  carbonCount: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  carbonMeasure: {
    padding: 5,
    color: colors.white,
    borderRadius: 6,
    fontWeight: 'bold',
    width: 90,
    textAlign: 'center',
    marginBottom: 10,
  },
  carbonTitle: {
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  hint: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  hintText: {
    color: colors.white,
    fontSize: 8,
    marginLeft: 8,
    width: 300,
  },
  navButton: {
    marginHorizontal: 10,
    flex: 1,
    flexWrap: 'wrap',
    borderWidth: 0.4,
    borderColor: colors.white,
  },
  subTitle: {
    color: colors.white,
    fontSize: 12,
    textAlign: 'center',
    width: 340,
    marginBottom: 10,
  },
  subTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    borderBottomColor: colors.white,
    borderBottomWidth: 0.2,
    width: 300,
    paddingBottom: 8,
  },
})