import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/theme';
import SIZES from '../../../../constants/theme';

export default StyleSheet.create({
  appBar: {
    padding: SIZES.SIZES.padding * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.COLORS.black,
  },
  icon: {
    flexDirection: 'row',
  },
  appBarIcons: {
    width: 24,
    height: 24,
  },
  marginLeft_icon: {
    marginLeft: SIZES.SIZES.padding * 2,
  },
});
