import {Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {dataProduct} from '../../../../utils/dummyData';
import {icons} from '../../../../constants';
import {fetchProducts} from '../../HomeThunk';
import {useDispatch, useSelector} from 'react-redux';

const Products = () => {
  const dispatch = useDispatch();
  const dataProducts = useSelector(state => {
    state.home.dataProducts;
  });
  useEffect(() => {
    console.log('aaadsfdfsdfdsfsdfsdsfdsfs  cdsfsdfssd  useEffect');
    dispatch(fetchProducts());
    // dispatch(fetchCategories())
  });
  console.log(dataProducts);

  const renderItem = item => (
    <TouchableOpacity style={styles.item}>
      <Image source={icons.like} style={styles.icon_like} />
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={styles.image_shoes}
      />
      <Text style={styles.name_shoes}>{item.name}</Text>
      <Text style={styles.price_shoes}>${item.price}</Text>
    </TouchableOpacity>
  );
  return (
    <StaggeredList
      style={styles.staggered_list}
      data={dataProduct}
      animationType={'FADE_IN_FAST'}
      renderItem={({item}) => renderItem(item)}
    />
  );
};

export default Products;
