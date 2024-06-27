import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Background from '../components/Background.jsx';
import MainContainer from '../components/MainContainer.jsx';
import Loading from '../components/Loading.jsx';
import { UserContext } from '../context/UserContext';
import { AlunoContext } from '../context/AlunoContext';
import moment from 'moment';
import { URL } from '../config';

const AgendasPage = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const { aluno } = useContext(AlunoContext);
  const [agendas, setAgendas] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const refeicoesValor = (valor) => {
    switch (valor) {
      case 0:
        return 'Aceitou tudo';
      case 1:
        return 'Boa parte';
      case 2:
        return 'Parte';
      case 3:
        return 'Rejeitou';
      default:
        return 'Valor inválido';
    }
  };

  const evacuacaoValor = (valor) => {
    switch (valor) {
      case 0:
        return 'Normal';
      case 1:
        return 'Não Evacuou';
      case 2:
        return 'Diarréia';
      default:
        return 'Valor inválido';
    }
  };

  const handleNext = () => {
    if (currentIndex < agendas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderAgendaItem = ({ item }) => (
    <View style={styles.agendaItem}>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Café da Manhã:</Text>{' '}
        {refeicoesValor(item.cafeDaManha)}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Almoço:</Text>{' '}
        {refeicoesValor(item.almoco)}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Lanche da Tarde:</Text>{' '}
        {refeicoesValor(item.lancheDaTarde)}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Janta:</Text>{' '}
        {refeicoesValor(item.janta)}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Evacuação:</Text>{' '}
        {evacuacaoValor(item.evacuacao)}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Repousou:</Text>{' '}
        {item.repousou ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Pomada de Assadura:</Text>{' '}
        {item.pomadaDeAssadura ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Mantinha/Coberta:</Text>{' '}
        {item.mantinha_Coberta ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Toalha:</Text>{' '}
        {item.toalha ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Bico:</Text>{' '}
        {item.bico ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Chinelo:</Text>{' '}
        {item.chinelo ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Roupas para Troca:</Text>{' '}
        {item.roupasParaTroca ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Shampoo:</Text>{' '}
        {item.shampoo ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Condicionador:</Text>{' '}
        {item.condicionador ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Sabonete:</Text>{' '}
        {item.sabonete ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Pente:</Text>{' '}
        {item.pente ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Lenço Umedecido:</Text>{' '}
        {item.lençoUmedecido ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Atividade em Família:</Text>{' '}
        {item.atividade_EmFamilia ? 'Sim' : 'Não'}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Medicação:</Text> {item.medicacao}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Observação do Professor:</Text>{' '}
        {item.observacaoProfessor}
      </Text>
      <Text style={styles.agendaItemText}>
        <Text style={{ fontWeight: 'bold' }}>Ciente do Responsável:</Text>{' '}
        {item.cienteResponsavel ? 'Sim' : 'Não'}
      </Text>

      {item.cienteResponsavel ? (
        item.observacaoResponsavel ? (
          <Text style={styles.agendaItemText}>
            <Text style={{ fontWeight: 'bold' }}>
              Observação do Responsável:
            </Text>{' '}
            {item.observacaoResponsavel}
          </Text>
        ) : (
          <Text style={styles.agendaItemText}>
            <Text style={{ fontWeight: 'bold' }}>
              Observação do Responsável:
            </Text>{' '}
            Nenhuma observação do responsável
          </Text>
        )
      ) : null}
    </View>
  );

  const handleAdicionarObservacao = () => {
    const agendaAtual = agendas[currentIndex];
    if (agendaAtual) {
      navigation.navigate('RespObservacao', {
        agendaId: agendaAtual.id,
      });
    }
  };

  const getAllAgendas = async () => {
    try {
      const response = await fetch(`${URL}/api/Agendas/Aluno/${aluno.id}`, {
        headers: { Authorization: `Bearer ${user.usuarioToken}` },
      });
      const data = await response.json();
      const sortedAgendas = data.sort(
        (a, b) => new Date(b.data) - new Date(a.data)
      );
      setAgendas(sortedAgendas);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllAgendas();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Background>
      <MainContainer style={{ alignItems: 'top', justifyContent: 'top' }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={handlePrevious}
            disabled={currentIndex === 0}
            style={styles.arrowContainer}>
            <Text style={styles.arrow}>{`⬅️`}</Text>
          </TouchableOpacity>

          {agendas.length > 0 && agendas[currentIndex] && (
            <Text style={styles.dateText}>
              {`Data: ${moment(agendas[currentIndex].data).format(
                'DD-MM-YYYY'
              )}`}
            </Text>
          )}

          <TouchableOpacity
            onPress={handleNext}
            disabled={currentIndex === agendas.length - 1}
            style={styles.arrowContainer}>
            <Text style={styles.arrow}>{`➡️`}</Text>
          </TouchableOpacity>
        </View>
        {agendas.length > 0 && agendas[currentIndex] && (
          <View style={styles.viewFlatList}>
            <FlatList
              style={styles.listContainer}
              data={[agendas[currentIndex]]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderAgendaItem}
            />
          </View>
        )}

        {!agendas[currentIndex]?.cienteResponsavel && (
          <TouchableOpacity
            style={styles.button}
            onPress={handleAdicionarObservacao}>
            <Text style={styles.buttonText}>Adicionar Observação</Text>
          </TouchableOpacity>
        )}
      </MainContainer>
    </Background>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 0,
  },
  arrowContainer: {
    flex: 1,
    alignItems: 'center',
  },
  arrow: {
    fontSize: 24,
  },
  dateText: {
    flex: 2,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1AB24C',
  },
  listContainer: {
    padding: 4,
    backgroundColor: '#1AB24C',
    height: '90%',
    borderRadius: 10,
  },
  agendaItemText: {
    fontSize: 20,
    textAlign: 'left',
    color: 'white',
  },
  viewFlatList: {
    height: 500,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    borderColor: '#1AB24C',
    borderWidth: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1AB24C',
    fontSize: 18,
  },
});

export default AgendasPage;
