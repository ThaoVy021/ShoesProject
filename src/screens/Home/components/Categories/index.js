import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import React, {useEffect} from 'react';
import {dataGetAllCategory} from '../../../../utils/dummyData';
import styles from './styles';
// import {fetchCategories, fetchProductByCategoryId} from '../../HomeThunk';
// import {useDispatch, useSelector} from 'react-redux';
// import {onSelectedCategory} from '../../HomeSlice';

const Categories = () => {
  // const dispatch = useDispatch();
  // const dataCategories = useSelector(state => state.home.dataCategories);
  // const categorySelected = useSelector(state => state.home.categorySelected);

  const renderItemCatgory = item => (
    <TouchableOpacity>
      <Text style={styles.category}>{item.category}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={dataGetAllCategory}
        horizontal
        renderItem={({item}) => renderItemCatgory(item)}
      />
    </View>
  );
};

export default Categories;
