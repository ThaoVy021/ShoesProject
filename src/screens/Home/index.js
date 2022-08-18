import {View, SafeAreaView} from 'react-native';
import React from 'react';
import AppBar from './components/Appbar';
import styles from './styles';
import Categories from './components/Categories';
import Products from './components/Products';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background_black} />

      <SafeAreaView style={styles.safeAreaView}>
        <AppBar />
        <Categories />
        <Products />
      </SafeAreaView>
    </View>
  );
};

export default Home;
