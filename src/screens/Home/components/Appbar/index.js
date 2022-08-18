import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {icons} from '../../../../constants';
import styles from './styles';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={icons.iconClose} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icons.iconTune} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;
