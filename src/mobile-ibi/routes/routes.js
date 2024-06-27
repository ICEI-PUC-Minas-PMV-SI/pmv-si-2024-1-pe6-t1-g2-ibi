import React, {useContext} from 'react';
import LoginPage from '../pages/LoginPage';
import InitialPage from '../pages/InitialPage';
import AlunoSelect from '../pages/AlunoSelect';
import RespObservacao from '../pages/RespObservacao'
import AgendasPage from '../pages/AgendasPage';
import Header from '../components/Header.jsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AlunoContext} from '../context/AlunoContext'

const Stack = createNativeStackNavigator();

function AppRoutes() {
  const AlunoSelectWrapper = (props) => (
    <>
      <Header {...props} back={false} />
      <AlunoSelect {...props} />
    </>
  );

  const AgendasPageWrapper = (props) => (
    <>
      <Header {...props} back={true} title={aluno.nome} />
      <AgendasPage {...props} />
    </>
  );

  const RespObservacaoWrapper = (props) => (
    <>
      <Header {...props} back={true} title={aluno.nome} />
      <RespObservacao {...props}/>
    </>
  );

  const { aluno } = useContext(AlunoContext);

  
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Initial">
      <Stack.Screen name="Initial" component={InitialPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="AlunoSelect" component={AlunoSelectWrapper} />
      <Stack.Screen name="AgendasPage" component={AgendasPageWrapper}   />
      <Stack.Screen name="RespObservacao" component={RespObservacaoWrapper} />
      <Stack.Screen name="Header" component={Header} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
