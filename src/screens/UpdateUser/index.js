import {SafeAreaView} from 'react-native';
import React from 'react';
import AppBar from './component/AppBar';
import Avatar from './component/Avatar';
import FormUpdate from './component/FormUpdate';

const UpdateUser = () => {
  return (
    <SafeAreaView>
      <AppBar />
      <Avatar />
      <FormUpdate />
    </SafeAreaView>
  );
};

export default UpdateUser;
