import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Logo = () => {
  return (
    <View>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
      marginBottom: 20,
    },
});

export default Logo; 