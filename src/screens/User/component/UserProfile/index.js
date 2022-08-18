import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {images} from '../../../../constants';
import UserProfileTop from './UserProfileTop';
import UserProfileBottom from './UserProfileBottom';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infor_user}>
        <UserProfileTop />
        <UserProfileBottom />
      </View>
      <Image source={images.bgLogin} style={styles.avatar} />
    </View>
  );
};

export default UserProfile;
