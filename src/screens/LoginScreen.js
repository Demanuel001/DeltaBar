import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, Image } from 'react-native';
import Logo from '../assets/logo.png';
import colors from '../config/colors';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      Alert.alert('Login bem-sucedido');
    } else {
      Alert.alert('Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.subTitulo}>Delta Code Enterprise Solutions</Text>
      <Text style={styles.labelText}>Usuário</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor= {colors.placeholder}
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />
      <Text style={styles.labelText}>Senha</Text>
      <TextInput
        placeholder="Password"
        placeholderTextColor= {colors.placeholder}
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );  
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    width: '90%',
    height: 40,
    backgroundColor: colors.bgInput,
    borderRadius: 4,
    color: '#E8E7F1',
  },
  labelText: {
    marginBottom: 4,
    color: colors.text,
    fontWeight: 600,
    fontSize: 16,
  },
  image: {
    width: 220,
    height: 200,
  },
  subTitulo: {
    color: colors.placeholder,
    marginBottom: 40,
    fontSize: 16,
  },
};
export default LoginScreen;