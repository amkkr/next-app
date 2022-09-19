import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import Main from '../../src/pages';

describe('Index', () => {

  it('get Index', () => {
    act(() => {
      render(<Main />);
    });

    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});
