import {StyleSheet} from 'react-native';
import SIZES from '../../../../constants/theme';

export default StyleSheet.create({
  product: {
    margin: SIZES.SIZES.body6,
    padding: SIZES.SIZES.body6,
    marginBottom: 0,
    paddingBottom: 0,
  },
  product_icon_like: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
  product_image: {
    width: '100%',
    height: 222,
  },
});
