import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders startup', () => {
    render(<App title="React" />);

    expect(screen.getByText('Tutaj zaimplementuj swoje rozwiązanie')).toBeTruthy();
  });
});