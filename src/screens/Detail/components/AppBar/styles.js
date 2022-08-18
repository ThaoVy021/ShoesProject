import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/theme';
import FONTS from '../../../../constants/theme';
import SIZES from '../../../../constants/theme';

export default StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.SIZES.body6,
  },
  appBarIcons: {
    width: 24,
    height: 24,
  },
  appBarText: {
    color: COLORS.COLORS.black,
    fontSize: SIZES.SIZES.h4,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
  },
});
