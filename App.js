// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

// import colors were using
import colors from './app/config/colors';
// import default app text
import AppText from './app/components/AppText';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
    // Views for IOS and Androids
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // set view below status bar for androids
  },
  text: {
    color: colors.secondary,
  },
});
