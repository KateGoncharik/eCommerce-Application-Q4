import type { JSX } from 'react';
import { RouterProvider } from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { router } from '@/routes/router';

import { ReactQueryProvider } from './react-query';
import { ThemeProvider } from './theme';
import { ToastifyProvider } from './toastify';
import { TokenStoreProvider } from './token-store';

export const AppProvider = (): JSX.Element => {
  return (
    <TokenStoreProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ReactQueryProvider>
          <ThemeProvider>
            <ToastifyProvider>
              <RouterProvider router={router} />
            </ToastifyProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </LocalizationProvider>
    </TokenStoreProvider>
  );
};
