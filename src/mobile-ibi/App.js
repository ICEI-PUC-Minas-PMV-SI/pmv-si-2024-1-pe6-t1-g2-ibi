import React from 'react';
import AppRoutes from './routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './context/UserContext';
import { AlunoProvider } from './context/AlunoContext';

function App() {
  return (
    <UserProvider>
      <AlunoProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </AlunoProvider>
    </UserProvider>
  );
}

export default App;
