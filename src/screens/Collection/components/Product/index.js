import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {dataProduct} from '../../../../utils/dummyData';
import {icons} from '../../../../constants';

const Product = () => {
  const getProduct = item => (
    <View style={styles.product}>
      <Image source={icons.like} style={styles.product_icon_like} />
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={styles.product_image}
      />
      <Text style={styles.product_name}>{item.name}</Text>
      <Text numberOfLines={1} style={styles.product_theme}>
        {item.shortDescription}
      </Text>
      <View style={styles.product_line_price}>
        <Text style={styles.product_price}>${item.price}</Text>
        <View style={styles.product_choose_color}>
          <Text>Colors</Text>
          <TouchableOpacity
            style={[styles.product_choose_color_black, styles.marginLeft]}
          />
          <TouchableOpacity
            style={[styles.product_choose_color_white, styles.marginLeft]}
          />
        </View>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        style={styles.flatlist}
        data={dataProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => getProduct(item)}
      />
    </View>
  );
};

export default Product;
