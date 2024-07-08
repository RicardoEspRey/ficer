import React, { useState } from 'react';
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Detalle = ({ route }) => {
  const { jsonData } = route.params;

  const [inputText, setInputText] = useState('');

  const data = jsonData.data;

  const chartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
      {
        data: data,
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  

  return (
    <View style={styles.container}>
      <LineChart
        data={chartData}
        width={Dimensions.get('window').width - 20}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={styles.chart}
      />
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Datos de la Prueba</Text>
        <Text style={styles.text}>{JSON.stringify(data)}</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre del archivo"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Guardar Prueba" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  chart: {
    marginTop: 20,
    borderRadius: 16,
  },
  tableContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
  },
  tableTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  buttonContainer: {
    paddingTop: 10,
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Detalle;
