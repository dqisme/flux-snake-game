import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

describe('App', function () {
  it('renders a grid', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('grid')).toBeInTheDocument();
  });
});
