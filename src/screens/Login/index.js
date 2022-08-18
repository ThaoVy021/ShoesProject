import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import BackgroundImage from './components/BackgroundImage';
import FormLogin from './components/FormLogin';

const Login = () => {
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <FormLogin />
    </View>
  );
};

export default Login;
