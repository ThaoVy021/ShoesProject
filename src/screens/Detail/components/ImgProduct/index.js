import {View, Image} from 'react-native';
import React from 'react';
import styles from '../ImgProduct/styles';
import {icons} from '../../../../constants';
import {dataProduct} from '../../../../utils/dummyData';

const ImgProduct = () => {
  return (
    <View style={styles.product}>
      <Image source={icons.like} style={styles.product_icon_like} />
      <Image
        resizeMode="cover"
        source={{uri: dataProduct[7].image}}
        style={styles.product_image}
      />
    </View>
  );
};

export default ImgProduct;
