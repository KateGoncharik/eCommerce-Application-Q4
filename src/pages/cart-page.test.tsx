import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { CartPage } from './cart-page';

describe('CardPage', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>,
    );

    const cartTitle = screen.getByRole('heading');

    expect(cartTitle).toBeInTheDocument();
    expect(cartTitle).toHaveTextContent(/cart/i);
  });
});
