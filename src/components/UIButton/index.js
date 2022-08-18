import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../../constants';
import {getTextStyle} from '../../utils/formatter';

const UIButton = ({name, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UIButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.COLORS.black,
    height: theme.SIZES.radius3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.SIZES.base,
    ...theme.boxShadow2,
  },
  name: {
    ...getTextStyle(14, 22, 'Medium', theme.COLORS.white),
  },
});
