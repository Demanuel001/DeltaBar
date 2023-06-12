import React, { useState } from 'react';
import { View, TextInput, StatusBar, Alert, Text, Image, Switch, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/logo.png';
import colors from '../config/colors';
import ButtonLogin from '../components/ButtonLogin';

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

  const [rememberLogin, setRememberLogin] = useState(false);

  const handleRememberLoginToggle = () => {
    setRememberLogin(!rememberLogin);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#121214"
      />
      <Image source={Logo} style={styles.image} />
      <Text style={styles.subTitulo}>Delta Code Enterprise Solutions</Text>
      
      <View style={styles.inputContainer}>
        <View style={styles.iconWrapper}>
          <Icon name="user" size={20} color={colors.placeholder} style={styles.icon} />
        </View>
        <TextInput
          placeholder="Usuário"
          placeholderTextColor={colors.placeholder}
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.iconWrapper}>
          <Icon name="lock" size={20} color={colors.placeholder} />
        </View>
        <TextInput
          placeholder="Senha"
          placeholderTextColor={colors.placeholder}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.containerSwitch}>
        <Switch
          value={rememberLogin}
          onValueChange={handleRememberLoginToggle}
          thumbColor={rememberLogin ? '#4faae5' : '#7C7C8A'}
          trackColor={{ true: '#2B3891', false: '#C5C4D0' }}
          style={styles.switch}
        />
        <Text style={styles.text}>Lembrar Login</Text>
      </View>

      <ButtonLogin title="Login" onPress={handleLogin}/>
    </SafeAreaView>
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
    flex: 1,
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
  containerSwitch: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
    backgroundColor: colors.bgInput,
    borderRadius: 4,
    width: '84%',
  },
  iconWrapper: {
    paddingHorizontal: 12,
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  text: {
    color: colors.text,
    padding: 3,
  },
};
export default LoginScreen;