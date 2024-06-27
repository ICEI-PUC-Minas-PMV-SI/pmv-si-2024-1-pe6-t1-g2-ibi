import React, { createContext, useState } from 'react';

export const AlunoContext = createContext();

export const AlunoProvider = ({ children }) => {
  const [aluno, setAluno] = useState({nome: 'João'});

  return (
    <AlunoContext.Provider value={{ aluno, setAluno }}>
      {children}
    </AlunoContext.Provider>
  );
};
