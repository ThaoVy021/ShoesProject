import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {dataGetAllUser} from '../../../../../utils/dummyData';

const UserProfileTop = () => {
  return (
    <View style={styles.UserProfileTop}>
      <View style={styles.inforUser}>
        <Text style={styles.inforUser_name}>{dataGetAllUser[0].name}</Text>
        <Text style={styles.inforUser_rank}>{dataGetAllUser[0].rank}</Text>
        <Text style={styles.inforUser_accumulatedScore}>
          {dataGetAllUser[0].accumulatedScore}
        </Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default UserProfileTop;
