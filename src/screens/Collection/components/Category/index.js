import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {dataGetAllCategory} from '../../../../utils/dummyData';
import styles from './styles';

const Category = () => {
  const getAllCategory = item => (
    <TouchableOpacity style={styles.category}>
      <Text style={styles.name_each_categories}>{item.category}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={dataGetAllCategory}
        horizontal
        renderItem={({item}) => getAllCategory(item)}
      />
    </View>
  );
};

export default Category;
