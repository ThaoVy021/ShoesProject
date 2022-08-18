import {StyleSheet} from 'react-native';
import COLORS from '../../../../../../constants/theme';
import FONTS from '../../../../../../constants/theme';
import SIZES from '../../../../../../constants/theme';

export default StyleSheet.create({
  information_product_bottom: {
    padding: SIZES.SIZES.padding * 2,
    paddingTop: SIZES.SIZES.padding / 2,
  },
  title: {
    color: COLORS.COLORS.black,
    fontSize: SIZES.SIZES.h4,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
    fontFamily: FONTS.FONTS.h4.fontFamily,
  },
  discription: {
    color: COLORS.COLORS.gray,
    fontSize: SIZES.SIZES.h3,
    marginTop: SIZES.SIZES.padding * 2,
  },
  button_add: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.COLORS.black,
    marginTop: SIZES.SIZES.padding * 2,
    borderRadius: SIZES.SIZES.radius5,
  },
  button_add_text: {
    fontSize: SIZES.SIZES.body6,
    color: COLORS.COLORS.white,
    alignSelf: 'center',
    paddingTop: SIZES.SIZES.padding2,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
  },
});
