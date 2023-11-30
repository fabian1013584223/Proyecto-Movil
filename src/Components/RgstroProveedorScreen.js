import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [idProveedor, setIdProveedor] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  const registrarProveedor = () => {
    // Código para registrar el proveedor
  };

  return (
    <View style={styles.container}>
      <Text>ID Proveedor:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setIdProveedor(text)}
        value={idProveedor}
      />

      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNombre(text)}
        value={nombre}
      />

      <Text>Apellido:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setApellido(text)}
        value={apellido}
      />

      <Text>Correo electrónico:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCorreoElectronico(text)}
        value={correoElectronico}
      />

      <Text>Teléfono:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTelefono(text)}
        value={telefono}
      />

      <Text>Dirección:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDireccion(text)}
        value={direccion}
      />

      <TouchableOpacity style={styles.button} onPress={registrarProveedor}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;