import React, { useState, useContext } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import JWT from 'expo-jwt';
import MainContainer from '../components/MainContainer.jsx';
import Logo from '../components/Logo.jsx';
import FormInput from '../components/FormInput.jsx';
import Background from '../components/Background.jsx';
import { UserContext } from '../context/UserContext';
import { JWT_SECRET_KEY, URL } from '../config';

const LoginPage = ({ navigation }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${URL}/api/usuarios/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const jwtToken = `${data.jwtToken}`;
        await AsyncStorage.setItem('tokenUsuario', jwtToken);

        const decoded = JWT.decode(jwtToken, JWT_SECRET_KEY);
        const { nameid: id, role: perfil } = decoded;
        if (perfil !== "Responsavel") {
          await AsyncStorage.removeItem('tokenUsuario');
          Alert.alert('Aviso', 'Aplicativo voltado para responsáveis');
          return;
        }

        setUser((prevState) => {
          return {
            ...prevState,
            usuarioId: id,
            usuarioPerfil: perfil,
            usuarioToken: jwtToken,
          };
        });

        Alert.alert('Successo', 'Login realizado com sucesso');
        navigation.navigate('AlunoSelect');
        navigation.reset({
          index: 0,
          routes: [{ name: 'AlunoSelect' }],
        });
      }
    } catch (error) {
      Alert.alert('Erro', 'Alguma coisa deu errado');
    }
  };

  return (
    <Background>
      <MainContainer style={styles.maincontainer}>
        <Logo />

        <View style={styles.form}>
          <FormInput placeholder="Digite seu id" funcao={setId} value={id} />

          <FormInput
            placeholder="Digite sua senha"
            senha={true}
            funcao={setPassword}
            value={password}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </MainContainer>
    </Background>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    height: 'auto',
  },
  form: {
    width: '100%',
  },
  button: {
    backgroundColor: '#1AB24C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginPage;
