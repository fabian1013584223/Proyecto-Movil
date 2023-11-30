import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar, // Agrega la importación de StatusBar
} from 'react-native';
//import DropDownPicker from 'react-native-dropdown-picker';

const ModificarCliente = () => {
  const [tipoDocumento, setTipoDocumento] = useState();
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');

  const handleModificarCliente = () => {
    // Implementar la lógica para modificar el cliente aquí
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.label}>Tipo de documento</Text>
          <DropDownPicker
            items={[
              { label: 'Identity card', value: 'Identity card' },
              { label: 'Citizenship card', value: 'Citizenship card' },
              { label: 'Foreigners card', value: 'Foreigners card' },
              { label: 'Passport', value: 'Passport' },
            ]}
            defaultValue={tipoDocumento}
            onChangeItem={(item) => setTipoDocumento(item.value)}
            style={styles.dropdown}
          />

          <Text style={styles.label}>Documento</Text>
          <TextInput
            style={styles.input}
            value={numeroDocumento}
            onChangeText={setNumeroDocumento}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
          />

          <Text style={styles.label}>Apellido</Text>
          <TextInput
            style={styles.input}
            value={apellido}
            onChangeText={setApellido}
          />

          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            value={correoElectronico}
            onChangeText={setCorreoElectronico}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Teléfono</Text>
          <TextInput
            style={styles.input}
            value={numeroTelefono}
            onChangeText={setNumeroTelefono}
            keyboardType="phone-pad"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleModificarCliente}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  form: {
    marginHorizontal: 30,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dropdown: {
    marginBottom: 20,
  },
});

export default ModificarCliente;