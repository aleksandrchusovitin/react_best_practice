import { createTheme, ThemeOptions, Theme } from '@mui/material';

import breakpoints from './breakpoints';
import palette from './palette';
import overrides from './overrides';
import { makeTypography } from './typography';

const createAppTheme = (themeOptions: ThemeOptions): Theme => createTheme(themeOptions);

const theme: Theme = createAppTheme({
  palette,
  ...overrides,
  breakpoints,
});

export default createTheme(theme, {
  typography: makeTypography(),
});
