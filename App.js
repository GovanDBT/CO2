import 'react-native-gesture-handler';
import React from 'react-native';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import colors were using
import colors from './app/config/colors';
// import default app text
import AppText from './app/components/AppText';
// import HomeScreen from './app/screens/HomeScreen';
import HomeScreen from './app/screens/HomeScreen';
import { DrawerContent } from './app/components/DrawerContent';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

// create navigation bar
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={props => <DrawerContent {...props}/>} 
        screenOptions={{ 
          headerStyle: { backgroundColor: colors.accent, elevation: 0, shadowOpacity: 0},
          headerTintColor: colors.white,
          headerTitleStyle: { fontWeight: 'bold', },
          headerShadowVisible: 'none',

        }}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.secondary,
  },
});
