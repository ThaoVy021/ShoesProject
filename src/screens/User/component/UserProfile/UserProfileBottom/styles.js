import {StyleSheet} from 'react-native';
import SIZES from '../../../../../constants/theme';
import {theme} from '../../../../../constants';

export default StyleSheet.create({
  UserProfileBottom: {
    width: '100%',
    marginTop: SIZES.SIZES.padding,
  },
  infor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: SIZES.SIZES.padding * 3,
    paddingRight: SIZES.SIZES.padding * 3,
    paddingTop: SIZES.SIZES.padding * 2,
  },
  infor_text: {
    ...theme.FONTS.body4_bold,
    left: 0,
  },
  infor_iconNext: {
    width: 12,
    height: 12,
    top: 3,
    right: 0,
  },
});
