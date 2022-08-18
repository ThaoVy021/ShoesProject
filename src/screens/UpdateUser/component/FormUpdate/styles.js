import {StyleSheet} from 'react-native';
import {theme} from '../../../../constants';
import SIZES from '../../../../constants/theme';
import COLORS from '../../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    padding: SIZES.SIZES.padding * 5,
  },
  item_text: {
    ...theme.FONTS.body4,
    color: COLORS.COLORS.gray,
  },
  item_input: {
    ...theme.FONTS.body6,
    marginTop: SIZES.SIZES.padding / 2,
  },
  marginTop: {
    marginTop: SIZES.SIZES.padding * 2,
  },

  input_update: {
    marginTop: SIZES.SIZES.padding * 4,
    backgroundColor: COLORS.COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.SIZES.padding * 3,
  },
  text_update: {
    ...theme.FONTS.body4_bold,
    fontSize: SIZES.SIZES.h4,
    color: COLORS.COLORS.white,
    padding: SIZES.SIZES.padding * 2,
  },
});
export default styles;
