import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Background from '../components/Background.jsx';
import MainContainer from '../components/MainContainer.jsx';
import { UserContext } from '../context/UserContext';
import { AlunoContext } from '../context/AlunoContext';
import { URL } from '../config';
import Loading from '../components/Loading.jsx';

const AlunoSelect = ({ navigation }) => {
  const { user, setUser, userAluno, setUserAluno } = useContext(UserContext);
  const { aluno, setAluno } = useContext(AlunoContext);
  // const [selectedAluno, setSelectedAluno] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${URL}/api/Usuarios/${user.usuarioId}`, {
          headers: {
            Authorization: `Bearer ${user.usuarioToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar usuário');
        }

        const data = await response.json();
        setUserAluno(data.alunos);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user && user.usuarioId) {
      fetchUser();
    }
  }, [user, setUserAluno]);

  if (isLoading) {
    return <Loading />;
  }

  const handleAlunoClick = (alunoSelecionado) => {
    setAluno(alunoSelecionado);
    navigation.navigate('AgendasPage');
  };

  const alunos = user && userAluno ? userAluno : [];

  if (alunos.length === 0) {
    return (
      <Background>
        <MainContainer>
          <View>
            <Text>Nenhum aluno encontrado.</Text>
          </View>
        </MainContainer>
      </Background>
    );
  }

  return (
    <Background>
      <MainContainer>
        <Text style={styles.titulo}>Selecione um Aluno</Text>
        <FlatList
          style={styles.listaAlunos}
          data={alunos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.botaoAluno}
              onPress={() => handleAlunoClick(item)}>
              <Text style={styles.textoBotao}>{item.nome}</Text>
            </TouchableOpacity>
          )}
        />
      </MainContainer>
    </Background>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1AB24C',
  },
  listaAlunos: {
    width: '100%',
  },
  botaoAluno: {
    borderWidth: 1,
    borderColor: '#1AB24C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  textoBotao: {
    color: '#1AB24C',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AlunoSelect;
