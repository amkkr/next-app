import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../../../src/components/header';

describe('Header', () => {

  it('get Header', () => {
    act(() => {
      render(<Header />);
    });

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

});
