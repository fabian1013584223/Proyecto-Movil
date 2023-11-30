import React, { useState } from 'react';
import {
 View,
 Text,
 StyleSheet,
 TextInput,
 Picker,
 TouchableOpacity,
} from 'react-native';

const RegistrationForm = () => {
 const [selectedDocType, setSelectedDocType] = useState('');
 const [name, setName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [phoneNumber, setPhoneNumber] = useState('');

 const handleRegistration = () => {
    // Implement your registration logic here
    console.log('Registration Successful');
 };

 return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de documento</Text>
      <Picker
        selectedValue={selectedDocType}
        onValueChange={(itemValue, itemIndex) => setSelectedDocType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Identity Card" value="identity_card" />
        <Picker.Item label="Citizenship Card" value="citizenship_card" />
        <Picker.Item label="Immigration Card" value="immigration_card" />
        <Picker.Item label="Passport" value="passport" />
      </Picker>

      <Text style={styles.label}>Documento</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDocumentNumber}
        value={documentNumber}
      />

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
      />

      <Text style={styles.label}>Apellido</Text>
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />

      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 20,
 },
 label: {
    fontSize: 18,
    marginBottom: 5,
 },
 input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
 },
 picker: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
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

export default FormularioLogin;