import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const NosotrosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nosotros </Text>
      <Text style={styles.description}>
        SISI es una empresa creada en el año 2010, dirigida a la tecnología, otorgando a la sociedad los mejores productos tecnológicos de calidad y con un muy buen precio en el mercado. Actualmente nos encontramos ubicados en la localidad de Chapinero en la zona comercial de la ciudad y tenemos una distribución en toda la ciudad de Bogotá. 

"Descubre el poder de la tecnología en nuestras manos" 
      </Text>
      <Text style={styles.contact}>Whatsapp: +57 310 1234567</Text>
      <Text style={styles.contact}>Teléfono: +57 310 1234567</Text>
      <Text style={styles.contact}>Email: info_tecnologia@sisi.com</Text>
      <Text style={styles.contact}>Ubicación: Carrera 13 #64-10, local 302 Chapinero, Bogotá, Colombia</Text>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('mailto:info_tecnologia@sisi.com')}>
        <Text style={styles.buttonText}>Enviar un correo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6C6C6C',
    marginBottom: 10,
    textAlign: 'center',
  },
  contact: {
    fontSize: 16,
    color: '#6C6C6C',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default NosotrosScreen;
