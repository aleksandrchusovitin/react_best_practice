import { SxProps } from '@mui/system';
import { Theme as MuiTheme } from '@mui/material';

export type SxStyles = Record<string, SxProps<Theme>>;
export type Theme = MuiTheme;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    fabler: true;
    tablet: true;
    desktop: true;
    largeScreen: true;
  }
}
