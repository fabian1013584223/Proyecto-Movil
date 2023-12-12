import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
 return (
    <View style={styles.container}>
    <h1>Administrador</h1>
      <Text style={styles.title}>Seleccione el tipo de registro que desee visualizar del control de inventarios de la empresa. </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Usuarios Clientes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Productos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proveedores</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Stock</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Facturas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Usuarios Personal</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
 },
 title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
 },
 button: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    margin: 5,
    borderRadius: 5,
 },
 buttonText: {
    color: '#FFF',
    fontSize: 16,
 },
});

export default App;