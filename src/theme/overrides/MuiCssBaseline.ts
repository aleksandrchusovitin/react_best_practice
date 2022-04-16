import { ComponentsOverrides, ComponentsProps } from '@mui/material';

type MuiCssBaselineType = {
  defaultProps: ComponentsProps['MuiCssBaseline'];
  styleOverrides: ComponentsOverrides['MuiCssBaseline'];
};

const MuiCssBaseline: MuiCssBaselineType = {
  styleOverrides: `
    @font-face {
      font-family: 'Roboto';
      src: url('./fonts/Roboto-Regular.ttf');
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 500;
      src: url('./fonts/Roboto-Medium.ttf');
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 700;
      src: url('./fonts/Roboto-Bold.ttf');
    }
  `,
  defaultProps: {},
};

export default MuiCssBaseline;
