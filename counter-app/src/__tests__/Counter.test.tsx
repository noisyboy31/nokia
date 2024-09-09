import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter component', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/counter/i);
  expect(counterElement).toBeInTheDocument();
});

test('prevents click within 3 seconds', () => {
  jest.useFakeTimers();
  render(<Counter />);

  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  
  const errorMessage = screen.getByText(/wait 3 seconds/i);
  expect(errorMessage).toBeInTheDocument();
});

test('increments counter', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/increment/i);
  fireEvent.click(incrementButton);
  const countDisplay = screen.getByText('1');
  expect(countDisplay).toBeInTheDocument();
});

