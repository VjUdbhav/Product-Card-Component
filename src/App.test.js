import { render, screen } from '@testing-library/react';
import App from './App';

test('renders product names', () => {
  render(<App />);
  expect(screen.getByText(/Wireless Mouse/i)).toBeInTheDocument();
  expect(screen.getByText(/Keyboard/i)).toBeInTheDocument();
});
