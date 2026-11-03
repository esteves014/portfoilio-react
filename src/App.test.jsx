import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  // jsdom não implementa IntersectionObserver
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /sobre mim/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /projetos/i })).toBeInTheDocument();
});
