import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainHomePage from "./components/HomePage/mainHomePage"


const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <MainHomePage/>
    </SafeAreaView>
        
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
  }
});

export default App;
