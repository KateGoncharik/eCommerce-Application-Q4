import { FC, PropsWithChildren } from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import * as tokenStoreModule from '@/stores/token-store';

import CatalogPage from './catalog-page';

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
);

const router = createMemoryRouter(
  [
    {
      element: <CatalogPage />,
      path: '/catalog',
    },
  ],
  { initialEntries: ['/', '/catalog'], initialIndex: 1 },
);

describe('catalog component', () => {
  it('renders page without errors', () => {
    vi.spyOn(tokenStoreModule, 'useTokenStore').mockImplementation(() => ({ token: 'test-token' }));

    expect(() =>
      render(
        <ReactQueryProvider>
          <RouterProvider router={router} />
        </ReactQueryProvider>,
      ),
    ).not.toThrow();
  });
});