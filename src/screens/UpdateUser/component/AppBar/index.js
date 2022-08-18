import {View, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons} from '../../../../constants';

const AppBar = () => {
  return (
    <View>
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.icon}>
          <Image source={icons.like} style={styles.appBarIcons} />
        </TouchableOpacity>
        <View style={styles.textEdit}>
          <Text style={styles.textEdit_style}>Edit Profile</Text>
        </View>
        <Text> </Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default AppBar;
