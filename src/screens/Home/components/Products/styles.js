import {StyleSheet} from 'react-native';
import SIZES from '../../../../constants/theme';
import COLORS from '../../../../constants/theme';
import {theme} from '../../../../constants';

export default StyleSheet.create({
  item: {
    margin: 8,
    padding: 16,
    backgroundColor: COLORS.COLORS.white,
    ...theme.boxShadow2,
    shadowColor: COLORS.COLORS.black,
    shadowRadius: 3.84,
    borderRadius: 5,
  },
  staggered_list: {
    padding: SIZES.SIZES.padding,
  },
  icon_like: {
    width: 16,
    height: 16,
    alignSelf: 'flex-end',
  },
  image_shoes: {
    width: '100%',
    height: 100,
  },
  name_shoes: {
    ...theme.FONTS.h4,
    fontWeight: '500',
    marginTop: 16,
  },
  price_shoes: {
    ...theme.FONTS.body6,
    color: COLORS.COLORS.gray,
    marginTop: 16,
  },
});
