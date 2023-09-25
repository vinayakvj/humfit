import { render, screen, fireEvent } from '@testing-library/react';
import LoginInput from '../loginInput';
import '@testing-library/jest-dom';

test('Random', () => {
  render(<LoginInput label="Email" type="email" pass={false} />);
  const label = screen.getByTestId('custom');
  expect(label).toBeInTheDocument();
});

test('Validation working?: invalid', () => {
  render(<LoginInput label="Email" type="email" pass={false} />);
  const input = screen.getByLabelText(/Email/i);
  fireEvent.change(input, { target: { value: 'random' } });
  const inv = screen.getByText(/Invalid/i);
  expect(inv).toBeInTheDocument();
});

test('Validation working?: Valid', () => {
  render(<LoginInput label="Email" type="email" pass={false} />);
  const input = screen.getByLabelText(/Email/i);
  fireEvent.change(input, { target: { value: 'vinny@gmail.com' } });
  const inv = screen.getByText(/Valid/i);
  expect(inv).toBeInTheDocument();
});
