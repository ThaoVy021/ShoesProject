import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {dataProduct} from '../../../../utils/dummyData';

const CartContent = () => {
  const cartProduct = item => (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image source={{uri: item.image}} style={styles.image_product_cart} />
        <View style={styles.information}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>$ {item.price}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.decrease}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>1</Text>
          <TouchableOpacity style={styles.increase}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <FlatList
      data={dataProduct}
      renderItem={({item}) => cartProduct(item)}
      style={styles.height_cart}
    />
  );
};

export default CartContent;
