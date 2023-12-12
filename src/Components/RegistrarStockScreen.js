import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [idStock, setIdStock] = useState('');
  const [idProducto, setIdProducto] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');
  const [cantidadReal, setCantidadReal] = useState('');
  const [cantidadIdeal, setCantidadIdeal] = useState('');
  const [cantidadMinima, setCantidadMinima] = useState('');
  const [cantidadAlarma, setCantidadAlarma] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');

  const handleRegistrar = () => {
    // Lógica para registrar
    console.log('Registrar');
  };

  const handleCancelarRegistro = () => {
    console.log('Cancelar Registro');
  };

  return (
    <View style={styles.container}>
      <h1>Registrar Stock</h1>
      <Text style={styles.label}>ID Stock:</Text>
      <TextInput style={styles.input} placeholder="ID Stock" onChangeText={(text) => setIdStock(text)} />

      <Text style={styles.label}>ID Producto:</Text>
      <TextInput style={styles.input} placeholder="ID Producto" onChangeText={(text) => setIdProducto(text)} />

      <Text style={styles.label}>Nombre del Producto:</Text>
      <TextInput style={styles.input} placeholder="Nombre del Producto" onChangeText={(text) => setNombreProducto(text)} />

      <Text style={styles.label}>Cantidad Real:</Text>
      <TextInput style={styles.input} placeholder="Cantidad real" onChangeText={(text) => setCantidadReal(text)} />

      <Text style={styles.label}>Cantidad Ideal:</Text>
      <TextInput style={styles.input} placeholder="Cantidad ideal" onChangeText={(text) => setCantidadIdeal(text)} />

      <Text style={styles.label}>Cantidad Mínima:</Text>
      <TextInput style={styles.input} placeholder="Cantidad mínima" onChangeText={(text) => setCantidadMinima(text)} />

      <Text style={styles.label}>Cantidad de Alarma:</Text>
      <TextInput style={styles.input} placeholder="Cantidad de alarma" onChangeText={(text) => setCantidadAlarma(text)} />

      <View style={styles.dateContainer}>
        <Text style={styles.label}>Fecha de ingreso:</Text>
        <TextInput
          style={styles.dateInput}
          placeholder="DD/MM/AAAA"
          value={fechaIngreso}
          onChangeText={(text) => setFechaIngreso(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Registrar" onPress={handleRegistrar} color="#1565C0" />
        <View style={{ height: 10 }} /> {/* Espacio entre los botones */}
        <Button title="Cancelar Registro" onPress={handleCancelarRegistro} color="#1565C0" />
      </View>
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
  label: {
    marginBottom: 11,
    color: '#1565C0',
  },
  dateContainer: {
    marginBottom: 10,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default App;