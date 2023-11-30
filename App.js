import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormularioLogin from './src/Components/FormularioLogin';
// import ModificarCliente from './src/Components/ModificarCliente';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      {/* <Text style={styles.title}>Modificar Cliente</Text> */}
      <FormularioLogin />
      {/* <ModificarCliente /> */}
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