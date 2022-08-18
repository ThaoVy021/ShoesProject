import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from '../AppBar/styles';
import {icons} from '../../../../constants';

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <Image source={icons.iconClose} style={styles.appBarIcons} />
      <Text style={styles.appBarText}>Men Shoes</Text>
      <Image source={icons.iconTune} style={styles.appBarIcons} />
    </View>
  );
};

export default AppBar;
