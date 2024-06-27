import React from 'react';
import { TextInput, StyleSheet} from 'react-native';

const FormInput = ({placeholder, funcao, value, senha}) => {
  return(
    <TextInput
      placeholder= {placeholder}
      autoCorrect={false}
      secureTextEntry={senha}
      onChangeText={funcao}
      value={value}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default FormInput