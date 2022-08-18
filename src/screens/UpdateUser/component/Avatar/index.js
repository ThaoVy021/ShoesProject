import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {images} from '../../../../constants';
import {icons} from '../../../../constants';

const Avatar = () => {
  return (
    <View style={styles.avatar}>
      <Image source={images.bgLogin} style={styles.avatar_image} />
      <TouchableOpacity style={styles.avatar_iconChange}>
        <Image source={icons.like} style={styles.iconChange} />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
