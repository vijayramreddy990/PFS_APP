/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const LandingScreen = props => {
  const [nozzlesCount, setNozzlesCount] = useState('');
  const [nozzles, setNozzles] = useState([]);
  useEffect(() => {
    let Nozzles = [];
    for (let i = 0; i < nozzlesCount; i++) {
      Nozzles.push(i + 1);
    }
    setNozzles(Nozzles);
  }, [nozzlesCount]);
  const handleNozzleCount = count => {
    setNozzlesCount(count);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Please Enter the No.of Nozzles we are possing
      </Text>
      <View style={styles.inputContainer}>
        <Text
          style={[
            styles.inputHeaderStyle,
            nozzlesCount.length < 1 && styles.inputError,
          ]}>
          Nozzle Count
        </Text>
        <TextInput
          style={[
            styles.input,
            nozzlesCount.length < 1 && styles.inputBoxError,
          ]}
          onChangeText={value => handleNozzleCount(value)}
          value={nozzlesCount}
          placeholder="No Of Nozzles ..."
        />
      </View>
      {nozzlesCount > 0 && (
        <Text style={styles.textStyle}>
          Please choose any of the following to proceed further
        </Text>
      )}
      {nozzles?.map((item, index) => (
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Readings')}
          style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Nozzle-{item}</Text>
        </TouchableOpacity>
      ))}
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
  inputContainer: {
    marginVertical: 12,
  },
  inputHeaderStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  inputError: {
    color: 'red',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  inputBoxError: {
    borderColor: 'red',
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
