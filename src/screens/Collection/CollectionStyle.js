import {StyleSheet} from 'react-native';
import COLORS from '../../constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.COLORS.black,
    position: 'absolute',
    width: '100%',
    height: 250,
  },
  flex_safeAreaView: {
    flex: 1,
  },
});
