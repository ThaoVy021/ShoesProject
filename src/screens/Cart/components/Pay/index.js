import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons} from '../../../../constants';

const Pay = () => {
  return (
    <View style={styles.pay}>
      <Text style={styles.total_money}>$ 1.290</Text>

      <TouchableOpacity style={styles.checkout}>
        <Image source={icons.like} style={styles.icon_checkout} />
        <Text style={styles.checkout_text}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pay;
