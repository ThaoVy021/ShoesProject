import {View} from 'react-native';
import React from 'react';
import styles from '../InformationProduct/styles';
import InformationProductTop from './components/InformationProductTop';
import InformationProductBottom from './components/InformationProductBottom';

const InformationProduct = () => {
  return (
    <View style={styles.information_product}>
      <InformationProductTop />
      <InformationProductBottom />
    </View>
  );
};

export default InformationProduct;
