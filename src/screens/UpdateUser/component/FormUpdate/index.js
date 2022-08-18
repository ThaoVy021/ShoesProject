import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {dataGetAllUser} from '../../../../utils/dummyData';

const FormUpdate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.item_text}>Mã thành viên</Text>
        <TextInput style={styles.item_input}>{dataGetAllUser[0].id}</TextInput>
      </View>

      <View style={[styles.item, styles.marginTop]}>
        <Text style={styles.item_text}>Name</Text>
        <TextInput style={styles.item_input}>
          {dataGetAllUser[0].name}
        </TextInput>
      </View>

      <View style={[styles.item, styles.marginTop]}>
        <Text style={styles.item_text}>Email</Text>
        <TextInput style={styles.item_input}>
          {dataGetAllUser[0].email}
        </TextInput>
      </View>

      <View style={[styles.item, styles.marginTop]}>
        <Text style={styles.item_text}>Số điện thoại</Text>
        <TextInput style={styles.item_input}>
          {dataGetAllUser[0].numberPhone}
        </TextInput>
      </View>

      <View style={[styles.item, styles.marginTop]}>
        <Text style={styles.item_text}>Địa chỉ</Text>
        <TextInput style={styles.item_input}>
          {dataGetAllUser[0].address}
        </TextInput>
      </View>

      <TouchableOpacity style={styles.input_update}>
        <Text style={styles.text_update}>UPDATE PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormUpdate;
