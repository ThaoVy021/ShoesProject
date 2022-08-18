import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/theme';
import SIZES from '../../../../constants/theme';
import FONTS from '../../../../constants/theme';

export default StyleSheet.create({
  category: {
    marginTop: 15,
  },
  name_each_categories: {
    color: COLORS.COLORS.white,
    margin: 8,
    fontSize: SIZES.SIZES.h4,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
  },
});
