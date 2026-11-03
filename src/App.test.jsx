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
  expect(screen.getByRole('heading', { name: /^projetos$/i })).toBeInTheDocument();
});

test('shows the minimum structure required by the TG regulation', () => {
  render(<App />);
  expect(screen.getByText('Vitor Miguel da Silva Esteves')).toBeInTheDocument();
  expect(screen.getByAltText(/logo da fatec lins/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^fatec/i })).toHaveAttribute('href', 'https://www.fateclins.edu.br');
  expect(screen.getByRole('link', { name: /^curriculum/i })).toHaveAttribute('href', '/archives/vitor_esteves_cv.pdf');
  [1, 2, 3, 4, 5, 6].forEach((semester) => {
    expect(screen.getByRole('heading', { name: new RegExp(`${semester}º semestre`) })).toBeInTheDocument();
  });
});
