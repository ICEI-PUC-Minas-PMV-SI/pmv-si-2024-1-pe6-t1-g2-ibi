import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainContainer = ({ children, style }) => {
  return (
     <View style={[styles.container, style]}>
      {children}
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '95%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
  },
});

export default MainContainer; 