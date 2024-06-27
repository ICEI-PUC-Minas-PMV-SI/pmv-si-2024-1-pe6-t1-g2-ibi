import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import Background from '../components/Background.jsx';
import MainContainer from '../components/MainContainer.jsx';
import { URL } from '../config';
import { UserContext } from '../context/UserContext';

const RespObservacao = ({ route, navigation }) => {
  const { agendaId } = route.params;

  const { user } = useContext(UserContext);

  const [isChecked, setIsChecked] = useState(false);
  const [observacao, setObservacao] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async () => {
    if (isChecked) {
      try {
        const response = await fetch(`${URL}/api/Agendas/${agendaId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.usuarioToken}`,
          },
          body: JSON.stringify([
            {
              operationType: 0,
              path: '/cienteResponsavel',
              op: 'replace',
              from: false,
              value: true,
            },
            {
              operationType: 0,
              path: '/observacaoResponsavel',
              op: 'replace',
              from: '',
              value: observacao,
            },
          ]),
        });

        if (response.ok) {
          navigation.navigate('AlunoSelect');
          navigation.reset({
            index: 0,
            routes: [{ name: 'AlunoSelect' }]
          });
        }
      } catch (error) {
        Alert.alert('Erro', 'Ocorreu um erro ao enviar os dados');
      }
    }
  };

  return (
    <Background>
      <MainContainer>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Estou ciente desta agenda:</Text>
          <Checkbox
            value={isChecked}
            onValueChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Observação"
          placeholderTextColor="#1AB24C"
          onChangeText={setObservacao}
          value={observacao}
          multiline
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={!isChecked}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </MainContainer>
    </Background>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginLeft: 10,
    borderColor: '#1AB24C',
  },
  label: {
    fontSize: 16,
    color: '#1AB24C',
  },
  textInput: {
    height: 100,
    width: '100%',
    borderColor: '#1AB24C',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    borderRadius: 5,
    marginBottom: 20,
    color: '#1AB24C',
  },
  button: {
    borderColor: '#1AB24C',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 20,
  },
  buttonText: {
    color: '#1AB24C',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default RespObservacao;
