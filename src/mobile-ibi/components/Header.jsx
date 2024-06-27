import React from 'react';
import { Appbar, TouchableRipple, Text } from 'react-native-paper';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = ({navigation, back, title}) => {
  const logout = async () => {
    try {
      const confirmed = await confirmLogout();
      
      if (confirmed) {
        await AsyncStorage.removeItem('jwtToken'); 
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
          });
      }
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const confirmLogout = () => {
    return new Promise((resolve) => {
      Alert.alert(
        'Confirmar Logout',
        'Tem certeza de que deseja sair?',
        [
          {
            text: 'Cancelar',
            onPress: () => resolve(false),
            style: 'cancel',
          },
          {
            text: 'Sim',
            onPress: () => resolve(true),
            style: 'destructive',
          },
        ],
        { cancelable: false }
      );
    });
  };

  return (
    <Appbar.Header style={{ backgroundColor: 'white', marginTop: 24 }}>
      {back !== false && <Appbar.BackAction onPress={() => navigation.goBack()} />}
      <Appbar.Content title={title} titleStyle={{ color: '#1AB24C' }} />
      <Appbar.Action icon="logout" color="#1AB24C" onPress={logout} />
    </Appbar.Header>
  );
};  

export default Header;
