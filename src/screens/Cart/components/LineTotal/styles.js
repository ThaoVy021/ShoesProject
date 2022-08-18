import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/theme';
import SIZES from '../../../../constants/theme';
import {theme} from '../../../../constants';

export default StyleSheet.create({
  total: {
    backgroundColor: COLORS.COLORS.lightGray3,
    justifyContent: 'space-between',
    bottom: 0,
    padding: SIZES.SIZES.padding * 2,
    flexDirection: 'row',
  },
  total_price: {
    flexDirection: 'row',
    marginLeft: SIZES.SIZES.padding * 3,
  },
  total_price_number: {
    ...theme.FONTS.body4_bold,
    marginLeft: SIZES.SIZES.padding * 1.5,
  },

  total_taxes: {
    flexDirection: 'row',
    marginRight: SIZES.SIZES.padding * 3,
  },
  total_taxes_number: {
    ...theme.FONTS.body4_bold,
    marginLeft: SIZES.SIZES.padding * 1.5,
  },
});
