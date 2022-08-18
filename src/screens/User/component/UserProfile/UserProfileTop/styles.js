import {StyleSheet} from 'react-native';
import COLORS from '../../../../../constants/theme';
import SIZES from '../../../../../constants/theme';
import {theme} from '../../../../../constants';

export default StyleSheet.create({
  UserProfileTop: {
    width: '80%',
  },
  inforUser: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inforUser_name: {
    ...theme.FONTS.body4_bold,
  },
  inforUser_rank: {
    color: COLORS.COLORS.gray,
    marginTop: SIZES.SIZES.padding,
  },
  inforUser_accumulatedScore: {
    ...theme.FONTS.body4_bold,
    marginTop: SIZES.SIZES.padding,
    fontSize: SIZES.SIZES.largeTitle,
  },
  line: {
    marginVertical: SIZES.SIZES.base * 2,
    height: 1,
    backgroundColor: COLORS.COLORS.line,
  },
});
