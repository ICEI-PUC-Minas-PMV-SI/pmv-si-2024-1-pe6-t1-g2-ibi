import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({usuarioId:"", usuarioPerfil:"", usuarioToken:""});
  const [userAluno, setUserAluno] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser, userAluno, setUserAluno }}>
      {children}
    </UserContext.Provider>
  );
};
