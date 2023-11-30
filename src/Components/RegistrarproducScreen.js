import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PedidoScreen = () => {
 const [estado, setEstado] = useState('Activo');

 const renderEstado = () => {
    if (estado === 'Activo') {
      return (
        <TouchableOpacity onPress={() => setEstado('Inactivo')}>
          <Text style={styles.estadoText}>Activo</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => setEstado('Activo')}>
          <Text style={styles.estadoText}>Inactivo</Text>
        </TouchableOpacity>
      );
    }
 };

 return (
    <View style={styles.container}>
      <Text>Estado:</Text>
      {renderEstado()}
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 estadoText: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
 },
});

export default RegistrarproducScreen;