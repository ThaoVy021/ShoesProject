import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import SearchInput from './components/Search';
import Products from './components/Products';

const Search = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <Products />
    </View>
  );
};

export default Search;
