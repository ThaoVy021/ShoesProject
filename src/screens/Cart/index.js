import {View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './CartStyle';
import AppBar from './components/AppBar';
import CartContent from './components/Cart';
import LineTotal from './components/LineTotal';
import Pay from './components/Pay';

const Cart = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <AppBar />
        <CartContent />
        <LineTotal />
        <Pay />
      </SafeAreaView>
    </View>
  );
};

export default Cart;
