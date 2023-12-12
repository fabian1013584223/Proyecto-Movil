import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const LoginScreen = () => {
 return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 },
 logo: {
    width: 66,
    height: 58,
 },
});

export default LoginScreen;