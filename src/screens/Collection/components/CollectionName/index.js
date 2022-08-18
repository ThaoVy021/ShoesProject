import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const CollectionName = () => {
  return (
    <View style={styles.collection_name}>
      <Text style={styles.collection_name_text}>Athletic Shoes Collection</Text>
    </View>
  );
};

export default CollectionName;
