import React, { useState } from 'react';
import { View, Text, TextInput, Button, DatePickerAndroid, Platform, StyleSheet } from 'react-native';

const App = () => {
  const [idStock, setIdStock] = useState('');
  const [idProducto, setIdProducto] = useState('');
  const [cantidadReal, setCantidadReal] = useState('');
  const [cantidadIdeal, setCantidadIdeal] = useState('');
  const [cantidadMinima, setCantidadMinima] = useState('');
  const [cantidadAlarma, setCantidadAlarma] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState(null);

  const handleDateSelection = async () => {
    try {
      if (Platform.OS === 'android') {
        const { action, year, month, day } = await DatePickerAndroid.open({
          date: new Date(),
        });
        if (action !== DatePickerAndroid.dismissedAction) {
          setFechaIngreso(new Date(year, month, day));
        }
      }
    } catch (error) {
      console.warn('Cannot open date picker', error.message);
    }
  };

  const handleRegistrar = () => {
    // Lógica para registrar
    console.log('Registrar');
  };

  const handleCancelarRegistro = () => {
    console.log('Cancelar Registro');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="ID Stock" onChangeText={(text) => setIdStock(text)} />
      <TextInput style={styles.input} placeholder="ID Producto" onChangeText={(text) => setIdProducto(text)} />
      <TextInput style={styles.input} placeholder="Cantidad real" onChangeText={(text) => setCantidadReal(text)} />
      <TextInput style={styles.input} placeholder="Cantidad ideal" onChangeText={(text) => setCantidadIdeal(text)} />
      <TextInput style={styles.input} placeholder="Cantidad mínima" onChangeText={(text) => setCantidadMinima(text)} />
      <TextInput style={styles.input} placeholder="Cantidad de alarma" onChangeText={(text) => setCantidadAlarma(text)} />

      <View style={styles.dateContainer}>
        <Text style={styles.label}>Fecha de ingreso:</Text>
        <TextInput
          style={styles.dateInput}
          placeholder="DD/MM/AAAA"
          value={fechaIngreso ? fechaIngreso.toLocaleDateString() : ''}
          onFocus={handleDateSelection}
        />
      </View>

      <Button title="Registrar" onPress={handleRegistrar} />

      <Button title="Cancelar Registro" onPress={handleCancelarRegistro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
    padding: 10,
  },
  dateContainer: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
});

export default App;