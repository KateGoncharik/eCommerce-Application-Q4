import type { ReactNode } from 'react';

import { Button } from '@mui/material';

import { MuiProvider } from './lib/mui/mui.provider';

export function TestComponent(): ReactNode {
  return (
    <>
      <h1 className="bg-black text-center text-red-400">Final task - Verdantis</h1>
      <Button variant="contained">Click Me!</Button>
    </>
  );
}

export function App(): ReactNode {
  return (
    // * по документации mui, всё приложение должно быть обернуто в StyledEngineProvider, в нашем случае за все приложение будет отвечать RouterProvider (для проверки tailwind и mui вместо роутера временно положила TestComponent)
    // * зачем StyledEngineProvider? - чтоб стили в том порядке подключились: мию а потом tailwind
    // * зачем ThemeProvider? - тут будут храниться дефолтные значения для темы, чтоб в каждом компоненте тейлвиндом не менять
    <MuiProvider>
      <TestComponent />
    </MuiProvider>
  );
}
