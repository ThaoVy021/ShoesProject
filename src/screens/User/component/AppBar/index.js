import {View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons} from '../../../../constants';

const AppBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBar}>
        <TouchableOpacity>
          <Image source={icons.iconClose} style={styles.appBarIcons} />
        </TouchableOpacity>
        <View style={styles.icon}>
          <TouchableOpacity>
            <Image source={icons.iconTune} style={styles.appBarIcons} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.marginLeft_icon}>
            <Image source={icons.iconUser} style={styles.appBarIcons} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppBar;
