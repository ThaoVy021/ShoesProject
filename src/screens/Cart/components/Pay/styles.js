import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/theme';
import SIZES from '../../../../constants/theme';
import {theme} from '../../../../constants';

export default StyleSheet.create({
  pay: {
    backgroundColor: COLORS.COLORS.black,
    justifyContent: 'space-between',
    bottom: 0,
    padding: SIZES.SIZES.padding * 2,
    flexDirection: 'row',
    borderTopLeftRadius: SIZES.SIZES.padding * 2,
    borderTopRightRadius: SIZES.SIZES.padding * 2,
  },
  total_money: {
    ...theme.FONTS.body2,
    color: COLORS.COLORS.white,
  },

  checkout: {
    flexDirection: 'row',
    padding: SIZES.SIZES.padding,
    backgroundColor: COLORS.COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.boxShadow,
    borderRadius: SIZES.SIZES.padding * 2,
  },
  icon_checkout: {
    width: 12,
    height: 12,
    marginTop: 2,
  },
  checkout_text: {
    ...theme.FONTS.body4_bold,
    marginLeft: SIZES.SIZES.padding,
    color: COLORS.COLORS.black,
  },
});
