import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/theme';
import SIZES from '../../../../constants/theme';
import FONTS from '../../../../constants/theme';

export default StyleSheet.create({
  collection_name: {
    top: 0,
  },
  collection_name_text: {
    color: COLORS.COLORS.white,
    fontSize: SIZES.SIZES.largeTitle,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
    fontFamily: FONTS.FONTS.h4.fontFamily,
  },
});
