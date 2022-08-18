import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons} from '../../../../constants';

const AppBar = ({navigation}) => {
  // console.log(navigation);
  // const onPressChuyenPageHome = () => {
  //   navigation.navigate(`${screenNames.Home}`);
  // };
  return (
    <View style={styles.appBar}>
      <TouchableOpacity>
        <Image source={icons.iconClose} style={styles.appBarIcons} />
      </TouchableOpacity>
      <Text style={styles.appBarText}>My Cart</Text>
      <Image source={icons.iconTune} style={styles.appBarIcons} />
    </View>
  );
};

export default AppBar;
