import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

describe('App', function () {
  it('renders a grid with 100 cells', () => {
    const appContainer = render(<App />);
    expect(appContainer.getByTestId('grid')).toBeInTheDocument();
    expect(appContainer.getAllByRole('cell').length).toBe(100);
  });
});
