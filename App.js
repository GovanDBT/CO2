// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

// import colors were using
import colors from './app/config/colors';

export default function App() {
  return (
    // Views for IOS and Androids
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // set view below status bar for androids
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.secondary,
  },
});
