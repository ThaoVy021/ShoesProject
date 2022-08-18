import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const LineTotal = () => {
  return (
    <View style={styles.total}>
      <View style={styles.total_price}>
        <Text>Subtotal:</Text>
        <Text style={styles.total_price_number}>$ 1.250</Text>
      </View>

      <View style={styles.total_taxes}>
        <Text>Taxes:</Text>
        <Text style={styles.total_taxes_number}>$ 40</Text>
      </View>
    </View>
  );
};

export default LineTotal;
