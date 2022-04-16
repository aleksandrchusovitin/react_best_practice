import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import styles from './styles';

const Header: FC = () => (
  <Box sx={styles.root}>
    <Typography variant="mainPageHeading1" component="h1">
      Some title
    </Typography>
    <Typography variant="mainPageDescription">Some text</Typography>
  </Box>
);

export default Header;
