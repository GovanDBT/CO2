import 'react-native-gesture-handler';
import React from 'react-native';
import { StyleSheet, Dimensions, Text, View, TouchableHighlight, WebView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';
import { MessageRequest } from './Assistant';

// import colors were using
import colors from './app/config/colors';
// import custom drawer
import { DrawerContent } from './app/components/DrawerContent';
// imports the global screen (default screen)
import GlobalScreen from './app/screens/GlobalScreen';
// import the region screen
import RegionScreen from './app/screens/RegionScreen';
// import my carbon footprint screen
import CarbonFootprintScreen from './app/screens/CarbonFootprintScreen';
// import the carbon emission screen
import CarbonEmissionScreen from './app/screens/CarbonEmissionScreen';
// import the goals screen
import GoalScreen from './app/screens/GoalScreen';
// import about screen
import AboutScreen from './app/screens/AboutScreen';
// import contact screen
import ContactScreen from './app/screens/ContactScreen';
// import settings screen
import SettingsScreen from './app/screens/SettingsScreen';


// create navigation bar
const Drawer = createDrawerNavigator();


export default function App() {
  //return (
    // <NavigationContainer>
    //   {/** Side drawer that allows users to navigate to other pages */}
    //   <Drawer.Navigator 
    //     initialRouteName="Home" 
    //     drawerContent={props => <DrawerContent {...props}/>} 
    //     screenOptions={{ 
    //       headerStyle: { backgroundColor: colors.accent, elevation: 0, shadowOpacity: 0},
    //       headerTintColor: colors.white,
    //       headerTitleStyle: { fontWeight: 'bold', },
    //       headerShadowVisible: 'none',

    //     }}>
    //     {/** Side drawer lists */}
    //     <Drawer.Screen name="Home" component={GlobalScreen} options={{ title: 'Overview' }} />
    //     <Drawer.Screen name="Region" component={RegionScreen} options={{ title: 'Overview' }} />
    //     <Drawer.Screen name="Footprint" component={CarbonFootprintScreen} options={{ title: 'My Carbon Footprint' }} />
    //     <Drawer.Screen name="Emission" component={CarbonEmissionScreen} options={{ title: 'Carbon Emission' }} />
    //     <Drawer.Screen name="Goals" component={GoalScreen} />
    //     <Drawer.Screen name="About" component={AboutScreen} />
    //     <Drawer.Screen name="Contact" component={ContactScreen} />
    //     <Drawer.Screen name="Settings" component={SettingsScreen} />
        
    //   </Drawer.Navigator>
    // </NavigationContainer>
    
  //);
}
