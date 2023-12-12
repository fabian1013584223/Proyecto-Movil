import React, { useState } from 'react';
import {
 View,
 Text,
 TextInput,
 StyleSheet,
 TouchableOpacity,
 Linking,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginAdmin = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleLogin = () => {
    //lógica inicio de sesión
 };

 const handleForgotPassword = () => {
    Linking.openURL('https://www.example.com/reset-password');
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicia sesión como administrador</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon style={styles.icon} icon={faEnvelope} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon style={styles.icon} icon={faLock} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={handleForgotPassword}>
        <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
 },
 title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
 },
 inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
 },
 icon: {
    fontSize: 24,
    color: '#007AFF',
    marginRight: 10,
 },
 input: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#007AFF',
 },
 button: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
 },
 buttonText: {
    color: '#FFF',
 },
 link: {
    marginTop: 20,
 },
 linkText: {
    color: '#007AFF',
 },
});

export default LoginAdmin;