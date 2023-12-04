import React, { useState } from 'react';
import {
 View,
 Text,
 TextInput,
 StyleSheet,
 Button,
 Alert,
 TouchableOpacity,
 Platform,
 Picker,
} from 'react-native';

const ModificarPrecio = () => {
 const [idProducto, setIdProducto] = useState('');
 const [precioCompra, setPrecioCompra] = useState('');
 const [precioVenta, setPrecioVenta] = useState('');
 const [descuento, setDescuento] = useState('');
 const [inicioDescuento, setInicioDescuento] = useState('');
 const [finDescuento, setFinDescuento] = useState('');
 const [estado, setEstado] = useState('');

 const handleGuardar = () => {
    if (!idProducto || !precioCompra || !precioVenta || !descuento || !inicioDescuento || !finDescuento || !estado) {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }

    Alert.alert('Éxito', 'Detalles del precio guardados exitosamente');
 };

 return (
    <View style={styles.container}>
      <Text style={styles.label}>ID del Producto</Text>
      <TextInput
        style={styles.input}
        onChangeText={setIdProducto}
        value={idProducto}
        placeholder="Ingrese el ID del Producto"
      />

      <Text style={styles.label}>Precio de Compra</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrecioCompra}
        value={precioCompra}
        placeholder="Ingrese el Precio de Compra"
      />

      <Text style={styles.label}>Precio de Venta</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrecioVenta}
        value={precioVenta}
        placeholder="Ingrese el Precio de Venta"
      />

      <Text style={styles.label}>Descuento</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDescuento}
        value={descuento}
        placeholder="Ingrese el Descuento"
      />

      <Text style={styles.label}>Inicio del Descuento</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInicioDescuento}
        value={inicioDescuento}
        placeholder="Ingrese el Inicio del Descuento"
      />

      <Text style={styles.label}>Fin del Descuento</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFinDescuento}
        value={finDescuento}
        placeholder="Ingrese el Fin del Descuento"
      />

      <Text style={styles.label}>Estado</Text>
      <Picker
        selectedValue={estado}
        onValueChange={(itemValue, itemIndex) => setEstado(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Activo" value="activo" />
        <Picker.Item label="Inactivo" value="inactivo" />
      </Picker>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGuardar}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Cancelado', 'La modificación del precio ha sido cancelada')}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Atrás', 'Volviendo a la pantalla anterior')}>
          <Text style={styles.buttonText}>Atrás</Text>
        </TouchableOpacity>
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
 },
 label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#007BFF', 
 },
 input: {
    borderWidth: 1,
    borderColor: '#007BFF', 
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
 },
 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
 },
 button: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    marginLeft: 10,
 },
 buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
 },
});

export default ModificarPrecio;