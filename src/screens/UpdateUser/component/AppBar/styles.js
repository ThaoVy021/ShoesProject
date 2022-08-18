import {StyleSheet} from 'react-native';
import SIZES from '../../../../constants/theme';
import COLORS from '../../../../constants/theme';
import {theme} from '../../../../constants';

export default StyleSheet.create({
  appBar: {
    padding: SIZES.SIZES.padding * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appBarIcons: {
    width: 24,
    height: 24,
  },
  textEdit: {
    justifyContent: 'center',
  },
  textEdit_style: {
    ...theme.FONTS.body2,
    fontSize: SIZES.SIZES.h4,
  },
  line: {
    marginVertical: SIZES.SIZES.base,
    height: 3,
    backgroundColor: COLORS.COLORS.line,
    marginTop: 0,
  },
});
