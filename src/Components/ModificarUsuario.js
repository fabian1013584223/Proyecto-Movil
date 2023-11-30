import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  CheckBox,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!acceptedTerms) {
      alert('Por favor, acepta los términos y condiciones');
      return;
    }

    // Envía los datos aquí
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Modificar usuario</Text>

      <TextInput
        placeholder="Nombre de usuario"
        onChangeText={setUsername}
        value={username}
        style={styles.input}
      />

      <TextInput
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        placeholder="Confirmar contraseña"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
        style={styles.input}
      />

      <Text style={styles.subheading}>Términos y condiciones</Text>

      <Text style={styles.text}>
        Aceptar todos los términos y condiciones.
      </Text>

      <CheckBox
        value={acceptedTerms}
        onValueChange={setAcceptedTerms}
        style={styles.checkbox}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
  checkbox: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default App;