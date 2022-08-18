import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';

const SearchInput = () => {
  return (
    <SafeAreaView>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Tìm kiếm" />
        <TouchableOpacity style={styles.delete}>
          <Text style={styles.delete_text}>HUỶ</Text>
        </TouchableOpacity>
      </View>
      {/*<View style={styles.line} />*/}
    </SafeAreaView>
  );
};

export default SearchInput;
