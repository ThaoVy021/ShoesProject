import {View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../Detail/DetailStyle';
import AppBar from './components/AppBar';
import ImgProduct from './components/ImgProduct';
import InformationProduct from './components/InformationProduct';

const Detail = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <AppBar />
        <ImgProduct />
        <InformationProduct />
      </SafeAreaView>
    </View>
  );
};

export default Detail;
