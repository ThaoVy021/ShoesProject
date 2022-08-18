import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/theme';
import SIZES from '../../../../constants/theme';
import {theme} from '../../../../constants';

export default StyleSheet.create({
  height_cart: {
    height: 590,
  },
  container: {
    backgroundColor: COLORS.COLORS.lightGray3,
    alignItems: 'center',
    paddingTop: SIZES.SIZES.padding,
  },
  item: {
    backgroundColor: COLORS.COLORS.white,
    height: 80,
    width: '90%',
    ...theme.boxShadow2,
    padding: SIZES.SIZES.padding,
    borderRadius: SIZES.SIZES.radius2,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  image_product_cart: {
    width: 72,
    height: 72,
  },
  information: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: SIZES.SIZES.padding * 1.5,
  },
  name: {
    ...theme.FONTS.body6,
  },
  price: {
    marginTop: SIZES.SIZES.padding / 2,
    ...theme.FONTS.body4_bold,
  },
  decrease: {
    ...theme.boxShadow2,
    borderRadius: SIZES.SIZES.radius2,
    width: 15,
    height: 15,
    alignItems: 'center',
    top: -5,
  },
  quantity: {
    marginLeft: SIZES.SIZES.padding / 3,
  },
  increase: {
    ...theme.boxShadow2,
    borderRadius: SIZES.SIZES.radius2,
    backgroundColor: COLORS.COLORS.line,
    width: 15,
    height: 15,
    alignItems: 'center',
  },
});
