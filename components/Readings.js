/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [initialReading, setInitialReading] = useState('');
  const [finalReading, setFinalReading] = useState('');
  const [isInitalEmpty, setIsInitialEmpty] = useState(false);
  const [isFinalEmpty, setIsFinalEmpty] = useState(false);
  const handleInitialReading = value => {
    setInitialReading(value);
  };
  const handleFinalReading = value => {
    setFinalReading(value);
  };
  const onSubmit = () => {
    if (initialReading.length === 0 && finalReading.length === 0) {
      setIsFinalEmpty(true);
      setIsInitialEmpty(true);
    } else if (initialReading.length === 0) {
      setIsInitialEmpty(true);
      setIsFinalEmpty(false);
    } else if (finalReading.length === 0) {
      setIsFinalEmpty(true);
      setIsInitialEmpty(false);
    } else {
      console.log(
        'initialReading:::',
        initialReading,
        'finalReading:::',
        finalReading,
      );
      setInitialReading('');
      setFinalReading('');
      setIsFinalEmpty(false);
      setIsInitialEmpty(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Please Enter Initial And Final Readings
      </Text>
      <Text
        style={[styles.inputHeaderStyle, isInitalEmpty && styles.inputError]}>
        Initial Reading
      </Text>
      <TextInput
        style={[styles.input, isInitalEmpty && styles.inputBoxError]}
        onChangeText={value => handleInitialReading(value, true)}
        value={initialReading}
        placeholder="Initial Reading"
      />
      <View style={styles.inputContainer}>
        <Text
          style={[styles.inputHeaderStyle, isFinalEmpty && styles.inputError]}>
          Final Reading
        </Text>
        <TextInput
          style={[styles.input, isFinalEmpty && styles.inputBoxError]}
          onChangeText={value => handleFinalReading(value)}
          value={finalReading}
          placeholder="Final Reading"
        />
      </View>
      <TouchableOpacity onPress={onSubmit} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Submit Readings</Text>
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
  },
});

export default App;
