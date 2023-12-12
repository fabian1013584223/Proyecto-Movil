import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormularioLogin from './src/Components/FormularioLogin';
import RegistrarStockScreen from './src/Components/RegistrarStockScreen';
import RegistrarPrecioScreen from './src/Components/RegistrarPrecioScreen';
import RegistrarproducScreen from './src/Components/RegistrarproducScreen';
import RgstroProveedorScreen from './src/Components/RgstroProveedorScreen';
import ModificarCliente from './src/Components/ModificarCliente';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      <Text style={styles.title}>Registrar Stock</Text> 
      <Text style={styles.title}>Registrar Precio</Text>
      <Text style={styles.title}>Registrar Producto</Text>
      <Text style={styles.title}>Registrar Proveedores</Text>
      <Text style={styles.title}>Modificar Cliente</Text> 
      <Text style={styles.title}>Modificar Precio</Text> 
      <FormularioLogin />
      <RegistrarStockScreen/>
      <RegistrarPrecioScreen/>
      <RegistrarproducScreen/>
      <RgstroProveedorScreen/>
      <ModificarCliente />
      <ModificarPrecio/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;