import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/theme';
import SIZES from '../../../../constants/theme';
import {theme} from '../../../../constants';

export default StyleSheet.create({
  container: {
    height: 400,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infor_user: {
    backgroundColor: COLORS.COLORS.white,
    width: '80%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: SIZES.SIZES.padding * 8,
    ...theme.boxShadow,
    borderRadius: SIZES.SIZES.radius5 * 2,
  },
  avatar: {
    position: 'absolute',
    width: 96,
    height: 96,
    top: SIZES.SIZES.padding * 3,
    ...theme.boxShadow,
    borderRadius: SIZES.SIZES.radius5 * 5,
  },
});
