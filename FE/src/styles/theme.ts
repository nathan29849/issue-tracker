const calcRem = (size: number): string => `${size / 16}rem`;

const color = {
  titleActive: '#14142B',
  body: '#4E4B66',
  label: '#6E7191',
  placeholder: '#A0A3BD',
  line: '#D9DBE9',
  inputBackground: '#EFF0F6',
  background: '#F7F7FC',
  offWhite: '#FEFEFE',
  blue: '#007AFF',
  lightBlue: '#C7EBFF',
  darkBlue: '#004DE3',
  purple: '#0025E7',
  lightPurple: '#CCD4FF',
  darkPurple: '#020070',
  red: '#FF3B30',
  lightRed: '#FFD1CF',
  darkRed: '#C60B00',
  green: '#34C759',
  lightGreen: '#DDFFE6',
  darkGreen: '#00A028',
};

const fontSize = {
  xs: calcRem(12),
  sm: calcRem(16),
  md: calcRem(18),
  lg: calcRem(24),
  display: calcRem(32),
};

const theme = {
  color,
  fontSize,
};

export default theme;
export type Color = typeof color;
