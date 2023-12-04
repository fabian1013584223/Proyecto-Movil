import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import PickerSelect from 'react-native-picker-select';

const ModificarPrecio = () => {
  const [categoria, setCategoria] = useState('');
  const [estado, setEstado] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');

  const categorias = [
    { label: 'Accesorio', value: 'accesorio' },
    { label: 'Dispositivo', value: 'dispositivo' },
    { label: 'Periférico', value: 'periferico' },
  ];

  const estados = [
    { label: 'Activo', value: 'activo' },
    { label: 'Inactivo', value: 'inactivo' },
  ];

  const handleSubmit = () => {
    console.log('Nombre del Producto:', nombreProducto);
    console.log('Precio:', precio);
    console.log('Cantidad:', cantidad);
    console.log('Categoría:', categoria);
    console.log('Estado:', estado);
  };

  const handleBack = () => {
    // Implementa la lógica para ir atrás
    console.log('Atrás');
  };

  const handleSave = () => {
    // Implementa la lógica para guardar
    console.log('Guardar');
  };

  const handleCancel = () => {
    // Implementa la lógica para cancelar
    console.log('Cancelar');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del Producto:</Text>
      <TextInput
        style={styles.input}
        value={nombreProducto}
        onChangeText={(text) => setNombreProducto(text)}
      />
      <Text style={styles.label}>Precio:</Text>
      <TextInput
        style={styles.input}
        value={precio}
        onChangeText={(text) => setPrecio(text)}
      />
      <Text style={styles.label}>Cantidad:</Text>
      <TextInput
        style={styles.input}
        value={cantidad}
        onChangeText={(text) => setCantidad(text)}
      />
      <Text style={styles.label}>Categoría:</Text>
      <PickerSelect
        style={styles.picker}
        value={categoria}
        onValueChange={(value) => setCategoria(value)}
        items={categorias}
      />
      <Text style={styles.label}>Estado:</Text>
      <PickerSelect
        style={styles.picker}
        value={estado}
        onValueChange={(value) => setEstado(value)}
        items={estados}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Modificar Precio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.blueButton} onPress={handleBack}>
        <Text style={styles.buttonText}>Atrás</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.blueButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.blueButton} onPress={handleCancel}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  picker: {
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'royalblue',
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  blueButton: {
    backgroundColor: 'royalblue', 
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ModificarProducto;