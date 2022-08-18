import {View, Image} from 'react-native';
import React from 'react';
import {images} from '../../../../constants';
import styles from './styles';
const BackgroundImage = () => {
  return (
    <>
      <View style={styles.flexTwo}>
        <Image
          resizeMode="cover"
          source={images.bgLogin}
          style={styles.background_image}
        />
      </View>
      <View style={styles.flexOne} />
    </>
  );
};

export default BackgroundImage;
