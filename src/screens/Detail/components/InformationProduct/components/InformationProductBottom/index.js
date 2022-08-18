import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../InformationProductBottom/styles';

const InformationProductBottom = () => {
  return (
    <View style={styles.information_product_bottom}>
      {/* Title */}
      <Text style={styles.title}>
        Adidas Running Shoes With Cooling Ventilation
      </Text>
      <Text style={styles.discription}>
        Take cool, dry on sunny, warmdays. These adidas running shoes have
        plenty of ventilation.
      </Text>
      <TouchableOpacity style={styles.button_add}>
        <Text style={styles.button_add_text}>Add to bag</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InformationProductBottom;
