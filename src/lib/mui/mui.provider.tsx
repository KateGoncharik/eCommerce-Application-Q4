import type { PropsWithChildren, ReactNode } from 'react';

import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#334c36',
    },
    secondary: {
      main: '#d9d9d9',
    },
    // * можно настроить и для error & info
    // * https://mui.com/material-ui/customization/theming/
  },
});

export function MuiProvider({ children }: PropsWithChildren): ReactNode {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}
