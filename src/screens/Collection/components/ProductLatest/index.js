import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {dataProduct} from '../../../../utils/dummyData';

const ProductLatest = () => {
  const getProductLatest = item => (
    <View style={styles.product_latest_item}>
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={styles.product_latest_item_image}
      />
    </View>
  );

  return (
    <View>
      <View style={styles.product_latest}>
        <Text style={styles.product_latest_title}>Latest Shoes</Text>
        <TouchableOpacity>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatlist}
        data={dataProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => getProductLatest(item)}
      />
    </View>
  );
};

export default ProductLatest;
