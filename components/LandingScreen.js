/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const LandingScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Please choose any of the following to proceed further
      </Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Nozzles');
        }}
        style={[styles.buttonStyle, {backgroundColor: 'blue'}]}>
        <Text style={styles.buttonText}>Petrol</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Nozzles')}
        style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Diesel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
    marginVertical: 20,
    padding: 12,
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
  },
  buttonStyle: {
    backgroundColor: 'green',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LandingScreen;
