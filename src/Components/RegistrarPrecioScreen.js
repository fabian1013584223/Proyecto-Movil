import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
  Picker, // Asegúrate de importar Picker de react-native
} from 'react-native';

const RegistrarPrecio = () => {
  const [producto, setProducto] = useState('');
  const [precioCompra, setPrecioCompra] = useState('');
  const [precioVenta, setPrecioVenta] = useState('');
  const [descuento, setDescuento] = useState('');
  const [fechaDescuento, setFechaDescuento] = useState('');
  const [estadoDescuento, setEstadoDescuento] = useState('');

  const handleSubmit = () => {
    // Implementa tu lógica de llamada a la API o envío de formulario aquí
    Alert.alert(
      'Formulario enviado!',
      JSON.stringify({
        producto,
        precioCompra,
        precioVenta,
        descuento,
        fechaDescuento,
        estadoDescuento,
      })
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registrar precio</Text>

      <TextInput
        style={styles.input}
        placeholder="ID Producto"
        onChangeText={(text) => setProducto(text)}
        value={producto}
      />

      <TextInput
        style={styles.input}
        placeholder="Precio compra"
        onChangeText={(text) => setPrecioCompra(text)}
        value={precioCompra}
      />

      <TextInput
        style={styles.input}
        placeholder="Precio venta"
        onChangeText={(text) => setPrecioVenta(text)}
        value={precioVenta}
      />

      <TextInput
        style={styles.input}
        placeholder="Descuento"
        onChangeText={(text) => setDescuento(text)}
        value={descuento}
      />

      <TextInput
        style={styles.input}
        placeholder="Fecha de descuento"
        onChangeText={(text) => setFechaDescuento(text)}
        value={fechaDescuento}
      />

      <View style={styles.dropdown}>
        <Picker
          selectedValue={estadoDescuento}
          onValueChange={(itemValue, itemIndex) =>
            setEstadoDescuento(itemValue)
          }
        >
          <Picker.Item label="Activo" value="Activo" />
          <Picker.Item label="Inactivo" value="Inactivo" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default RegistrarPrecio;