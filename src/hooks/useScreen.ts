import { useTheme, useMediaQuery } from '@mui/material';

type UseScreen = {
  isMobile: boolean;
  isFablet: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeScreen: boolean;
  lessThanDesktop: boolean;
  moreThanDesktop: boolean;
  lessThanFablet: boolean;
  lessThanTablet: boolean;
  lessThanLargeScreen: boolean;
};

const useScreen = (): UseScreen => {
  const theme = useTheme();
  const { fablet, tablet, desktop, largeScreen } = theme.breakpoints.values;

  const isMobile = useMediaQuery(theme.breakpoints.down(fablet));
  const isFablet = useMediaQuery(theme.breakpoints.between(fablet, tablet));
  const isTablet = useMediaQuery(theme.breakpoints.between(tablet, desktop));
  const isDesktop = useMediaQuery(theme.breakpoints.between(desktop, largeScreen));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(largeScreen));

  const lessThanLargeScreen = useMediaQuery(theme.breakpoints.down(largeScreen));
  const lessThanDesktop = useMediaQuery(theme.breakpoints.down(desktop));
  const moreThanDesktop = useMediaQuery(theme.breakpoints.up(desktop));
  const lessThanFablet = useMediaQuery(theme.breakpoints.down(fablet));
  const lessThanTablet = useMediaQuery(theme.breakpoints.down(tablet));

  return {
    isMobile,
    isFablet,
    isTablet,
    isDesktop,
    isLargeScreen,
    lessThanDesktop,
    moreThanDesktop,
    lessThanFablet,
    lessThanTablet,
    lessThanLargeScreen,
  };
};

export default useScreen;
