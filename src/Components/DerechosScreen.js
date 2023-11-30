import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Derechos De Autor</Text>
      <Text style={styles.description}>
        Los derechos de autor están reservados por Lizeth Valeria Rivera Ruiz, Diana Lorena Yepes Córdoba, Brayan Esteban Cárdenas Morales y Fabian Esneider Díaz Gómez. Todo el contenido de este proyecto, desde su creación hasta la actualidad, ha sido desarrollado completamente por los mencionados anteriormente, quienes son aprendices del Sena del Centro de Electricidad, Electrónica y Telecomunicaciones, en el programa de Análisis y Desarrollo de Software (ADSO), Ficha 2558108 G2, año 2023.
      </Text>
      <Text style={styles.description}>
        Derechos de autor reservados. Todo el contenido de este proyecto ha sido desarrollado completamente por nosotros.
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
  },
  description: {
    fontSize: 16,
    color: '#6C6C6C',
    marginBottom: 10,
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

export default AboutScreen;