import React, { useEffect, useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainContainer from '../components/MainContainer.jsx';
import JWT from 'expo-jwt';
import {JWT_SECRET_KEY} from "../config"
import { UserContext } from '../context/UserContext';

const InitialPage = ({ navigation }) => {
  const { setUser} = useContext(UserContext); 

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('tokenUsuario');
        if (token) {  
          const decoded = JWT.decode(token, JWT_SECRET_KEY);
          const { nameid: id, role: perfil } = decoded;
          setUser(prevState =>{
            return {...prevState, usuarioId: id, usuarioPerfil: perfil, usuarioToken: token}
          });
          navigation.navigate('AlunoSelect');
          navigation.reset({
            index: 0,
            routes: [{ name: 'AlunoSelect' }]
          }); 
        } else {
          navigation.replace('Login');
        }
      } catch (error) {
        console.error(error);
        navigation.replace('Login');
      }
    };

    checkToken();
  }, []);

  return (
    <MainContainer>
      <View>
        <ActivityIndicator size="large" color="#1AB24C" />
      </View>
    </MainContainer>
  );
};


export default InitialPage;
