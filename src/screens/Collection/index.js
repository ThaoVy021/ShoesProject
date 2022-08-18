import {View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './CollectionStyle';
import CollectionName from './components/CollectionName';
import Category from './components/Category';
import Product from './components/Product';
import ProductLatest from './components/ProductLatest';

const Collection = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.flex_safeAreaView}>
        <CollectionName />
        <Category />
        <Product />
        <ProductLatest />
      </SafeAreaView>
    </View>
  );
};

export default Collection;
