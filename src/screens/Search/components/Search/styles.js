import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/theme';
import SIZES from '../../../../constants/theme';
import {theme} from '../../../../constants';

export default StyleSheet.create({
  search: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: COLORS.COLORS.gray,
    padding: SIZES.SIZES.padding * 1.5,
    borderRadius: SIZES.SIZES.radius2,
    color: COLORS.COLORS.white,
    width: '80%',
  },
  delete: {
    alignSelf: 'center',
  },
  delete_text: {
    color: COLORS.COLORS.white,
    ...theme.FONTS.body4_bold,
    fontSize: SIZES.SIZES.h4,
  },
  line: {
    marginVertical: SIZES.SIZES.base * 1.5,
    height: 1,
    backgroundColor: COLORS.COLORS.gray,
    marginBottom: 0,
  },
});
