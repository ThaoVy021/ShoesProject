import {StyleSheet} from 'react-native';
import COLORS from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background_black: {
    height: 250,
    width: '100%',
    backgroundColor: COLORS.COLORS.black,
    position: 'absolute',
  },
  safeAreaView: {
    flex: 1,
  },
});
