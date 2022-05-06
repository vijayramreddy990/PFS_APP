import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LandingScreen from './components/LandingScreen';
import Readings from './components/Readings';
import Nozzles from './components/Nozzles';
import MyStack from './Navigation/StackNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Readings /> */}
      {/* <LandingScreen /> */}
      {/* <Nozzles /> */}
      <MyStack />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default App;
