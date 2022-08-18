import {StyleSheet} from 'react-native';
import {theme} from '../../constants';
import {getTextStyle} from '../../utils/formatter';
const styles = StyleSheet.create({
  inputContainer(errorText) {
    return {
      flexDirection: 'row',
      backgroundColor: theme.COLORS.lightGray,
      height: theme.SIZES.radius3,
      paddingHorizontal: theme.SIZES.base * 2,
      alignItems: 'center',
      borderRadius: theme.SIZES.radius,
      marginBottom: errorText ? 0 : theme.SIZES.base * 2,
    };
  },
  icon: {
    width: theme.SIZES.base * 2,
    height: theme.SIZES.base * 2,
    resizeMode: 'contain',
  },
  input: {
    marginLeft: theme.SIZES.base,
    flex: 1,
    height: '100%',
  },
  error: {
    ...getTextStyle(12, 20, 'Regular', theme.COLORS.red),
  },
});
export default styles;
