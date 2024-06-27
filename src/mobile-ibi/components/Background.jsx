  import React from 'react';
  import { KeyboardAvoidingView ,TextInput, StyleSheet} from 'react-native';

  const Background = ({children}) => {
    return(
      <KeyboardAvoidingView style={styles.background}>
        {children}
      </KeyboardAvoidingView>
    );
  };

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1AB24C',
    },
  });

  export default Background