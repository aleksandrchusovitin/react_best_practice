import { FC } from 'react';
import { ThemeProvider } from '@mui/material';

import theme from './theme';
import { Header } from './components';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
);

export default App;
