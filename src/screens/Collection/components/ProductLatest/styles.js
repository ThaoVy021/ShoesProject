import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/theme';
import SIZES from '../../../../constants/theme';
import FONTS from '../../../../constants/theme';

export default StyleSheet.create({
  flatlist: {
    height: 430,
  },
  product_latest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  product_latest_title: {
    fontSize: SIZES.SIZES.h4,
    fontWeight: FONTS.FONTS.body4_bold.fontWeight,
    fontFamily: FONTS.FONTS.h4.fontFamily,
  },
  product_latest_item: {
    marginTop: 10,
    marginLeft: 20,
    padding: 5,
    backgroundColor: COLORS.COLORS.white,
    shadowColor: COLORS.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    width: 70,
    height: 80,
  },
  product_latest_item_image: {
    width: '100%',
    height: '100%',
  },
});
