import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {icons} from '../../../../../constants';

const UserProfileBottom = () => {
  return (
    <View style={styles.UserProfileBottom}>
      <View style={styles.infor}>
        <TouchableOpacity>
          <Text style={styles.infor_text}>My Order</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icons.like} style={styles.infor_iconNext} />
        </TouchableOpacity>
      </View>

      <View style={styles.infor}>
        <TouchableOpacity>
          <Text style={styles.infor_text}>My Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icons.like} style={styles.infor_iconNext} />
        </TouchableOpacity>
      </View>

      <View style={styles.infor}>
        <TouchableOpacity>
          <Text style={styles.infor_text}>Recent view items</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icons.like} style={styles.infor_iconNext} />
        </TouchableOpacity>
      </View>

      <View style={styles.infor}>
        <TouchableOpacity>
          <Text style={styles.infor_text}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icons.like} style={styles.infor_iconNext} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfileBottom;
