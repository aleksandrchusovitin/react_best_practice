import { FC } from 'react';
import { Typography } from '@mui/material';

import { useScreen } from '../../hooks';
import Box from '../Box';

import styles from './styles';

const Header: FC = () => {
  const { lessThanTablet } = useScreen();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.textBlock}>
        <Typography variant="mainPageHeading1" component="h1">
          Some title
        </Typography>
        <Typography variant="mainPageDescription">Some text</Typography>
        {lessThanTablet && <Box>Wow!!!!</Box>}
      </Box>
    </Box>
  );
};
export default Header;
