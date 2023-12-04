import React, { useState } from 'react';
import {
 View,
 Text,
 TextInput,
 Button,
 StyleSheet,
 Alert,
} from 'react-native';

const ModificarProveedor = () => {
 const [idProveedor, setIdProveedor] = useState('');
 const [nombre, setNombre] = useState('');
 const [apellido, setApellido] = useState('');
 const [correoElectronico, setCorreoElectronico] = useState('');
 const [telefono, setTelefono] = useState('');
 const [direccion, setDireccion] = useState('');

 const modificarProveedor = () => {
    // Realiza la operación de modificar el proveedor aquí
    Alert.alert('Proveedor modificado', 'Los datos del proveedor se han modificado correctamente');
 };

 const cancelarModificarProveedor = () => {
    Alert.alert('Modificación cancelada', 'Has cancelado la modificación del proveedor');
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Modificar proveedor</Text>
      <TextInput
        style={styles.input}
        placeholder="ID Proveedor"
        onChangeText={setIdProveedor}
        value={idProveedor}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={setNombre}
        value={nombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        onChangeText={setApellido}
        value={apellido}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={setCorreoElectronico}
        value={correoElectronico}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        onChangeText={setTelefono}
        value={telefono}
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        onChangeText={setDireccion}
        value={direccion}
      />
      <View style={styles.buttonContainer}>
        <Button title="Atrás" color="#2196F3" onPress={cancelarModificarProveedor} />
        <Button title="Guardar" color="#2196F3" onPress={modificarProveedor} />
        <Button title="Cancelar" color="#2196F3" onPress={cancelarModificarProveedor} />
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'royalblue', 
 },
 input: {
    borderWidth: 1,
    borderColor: 'royalblue',
    borderRadius: 10, 
    padding: 10,
    marginBottom: 10,
 },
 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
 },
});

export default ModificarProveedor;