import {View, Image, TextInput, Text} from 'react-native';
import React from 'react';
import styles from './styles';
const UIInput = ({
  icon,
  placeholder,
  onChangeText,
  value,
  blurOnSubmit,
  onSubmitEditing,
  returnKeyLabel,
  keyboardType,
  errorText,
  ...props
}) => {
  return (
    <>
      <View style={styles.inputContainer(errorText)}>
        <Image source={icon} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          blurOnSubmit={blurOnSubmit}
          onSubmitEditing={onSubmitEditing}
          returnKeyLabel={returnKeyLabel}
          keyboardType={keyboardType}
          autoCapitalize="none"
          {...props}
        />
      </View>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </>
  );
};

export default UIInput;
