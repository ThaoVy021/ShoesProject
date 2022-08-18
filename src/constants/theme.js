import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
const {height, width} = Dimensions.get('window');
const IS_IOS = Platform.OS === 'ios';
const SAFE_PADDING = getStatusBarHeight();
const SAFE_AREA = getStatusBarHeight(true);
const COLORS = {
  // base colors
  primary: '#FC6D3F', // orange
  secondary: '#CDCDD2', // gray
  red: '#F05A69',

  // colors
  black: '#000',
  white: '#FFFFFF',
  gray: '#ACACAC',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
  line: '#DFDFDF',
};
const boxShadow = {
  shadowColor: '#000000',
  shadowOpacity: 0.1,
  shadowOffset: {
    width: 0,
    height: -4,
  },
  shadowRadius: 8,
  elevation: 4,
};
const boxShadow2 = {
  shadowColor: '#030C35',
  shadowOpacity: 0.2,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowRadius: 2,
  elevation: 4,
};
const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  radius2: 21,
  radius3: 40,
  radius4: 32,
  radius5: 10,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 12,
  h4: 18,
  body1: 30,
  body2: 24,
  body3: 12,
  body4: 14,
  body5: 12,
  body6: 16,
  height,
  width,
};
const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Medium', fontSize: SIZES.h3},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Roboto', fontSize: SIZES.body5, fontWeight: '500'},

  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto', fontSize: SIZES.body2, fontWeight: '500'},
  body3: {fontFamily: 'Roboto-Medium', fontSize: SIZES.body3},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body4_bold: {
    fontFamily: 'Roboto',
    fontSize: SIZES.body4,
    fontWeight: '700',
  },

  body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
  body6: {fontFamily: 'Roboto', fontSize: SIZES.body6},
};

const theme = {
  COLORS,
  SIZES,
  FONTS,
  boxShadow,
  boxShadow2,
  IS_IOS,
  SAFE_PADDING,
  SAFE_AREA,
};

export default theme;
