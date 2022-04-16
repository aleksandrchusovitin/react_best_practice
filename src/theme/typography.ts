import { Theme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    caption: false;
    button: false;
    overline: false;
    inherit: false;
    mainPageHeading1: true;
    mainPageDescription: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  mainPageHeading1: React.CSSProperties;
  mainPageDescription: React.CSSProperties;
}

const makeTypography = (theme: Theme): ExtendedTypographyOptions => {
  const tablet = theme.breakpoints.up('tablet');
  const desktop = theme.breakpoints.up('desktop');

  return {
    fontFamily: 'Roboto',

    mainPageHeading1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 32,
      lineHeight: '38px',
    },

    mainPageDescription: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '16px',

      [tablet]: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: '18px',
      },
      [desktop]: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: '24px',
      },
    },
  };
};

export { makeTypography };
