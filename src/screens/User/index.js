import {View} from 'react-native';
import React from 'react';
import styles from './UserStyle';
import AppBar from './component/AppBar';
import UserProfile from './component/UserProfile';

const User = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <UserProfile />
    </View>
  );
};

export default User;
