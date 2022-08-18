import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {UIButton, UIInput} from '../../../../components';
import {icons, theme} from '../../../../constants';
import {emailValidator, passwordValidator} from '../../../../utils/validate';
import styles from './styles';
const colorGradient = [
  theme.COLORS.transparent,
  theme.COLORS.white,
  theme.COLORS.white,
];
const FormLogin = () => {
  const [email, setEmail] = useState({
    value: '',
    error: '',
  });
  const [password, setPassword] = useState({
    value: '',
    error: '',
  });
  const onChangeTextEmail = text => {
    setEmail({
      value: text,
      error: '',
    });
  };
  const onChangeTextPassword = text => {
    setPassword({
      value: text,
      error: '',
    });
  };
  const onLogin = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
  };
  return (
    <LinearGradient style={styles.container} colors={colorGradient}>
      <View style={styles.flexOne}>
        <View style={styles.containerFormLogin}>
          <View style={styles.contentLogin}>
            <Text style={styles.titleLogin}>Đăng nhập</Text>
            <View style={styles.formLogin}>
              <UIInput
                icon={icons.iconUser}
                placeholder={'Email'}
                returnKeyLabel="next"
                value={email.value}
                onChangeText={text => onChangeTextEmail(text)}
                errorText={email.error}
                keyboardType="email-address"
              />
              <UIInput
                // secureTextEntry
                icon={icons.iconPassword}
                placeholder={'Mật khẩu'}
                returnKeyLabel="next"
                value={password.value}
                onChangeText={text => onChangeTextPassword(text)}
                errorText={password.error}
              />
              <UIButton name="Đăng nhập" onPress={onLogin} />
              <View style={styles.containerRegister}>
                <Text style={styles.subTitle}>Bạn chưa có tài khoản? </Text>
                <TouchableOpacity>
                  <Text style={styles.signUp}>Đăng ký</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default FormLogin;
