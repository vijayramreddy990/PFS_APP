import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Readings from './components/Readings';

const App = () => {
  return (
    <View style={styles.container}>
      <Readings />
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
