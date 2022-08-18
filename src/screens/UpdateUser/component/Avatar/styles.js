import {StyleSheet} from 'react-native';
import SIZES from '../../../../constants/theme';
import COLORS from '../../../../constants/theme';
import {theme} from '../../../../constants';

export default StyleSheet.create({
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 160,
  },
  avatar_image: {
    position: 'absolute',
    width: 120,
    height: 120,
    top: SIZES.SIZES.padding * 3,
    ...theme.boxShadow,
    borderRadius: SIZES.SIZES.radius5 * 7,
  },
  avatar_iconChange: {
    position: 'absolute',
    bottom: 10,
    left: '55%',
    width: 36,
    height: 36,
    backgroundColor: COLORS.COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.SIZES.padding * 5,
  },
  iconChange: {
    width: 15,
    height: 15,
  },
});
