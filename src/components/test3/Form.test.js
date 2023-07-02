import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from './Form';

test('renders form properly', () => {
  render(<Form/>); 
  const nameLabel = screen.getByText(/Name:/i)
  const ageLabel = screen.getByText(/Age:/i)
  expect(nameLabel).toBeInTheDocument()
  expect(ageLabel).toBeInTheDocument()
  const input = screen.getByLabelText(/Age:/i);
  expect(input).toHaveAttribute('type', 'number');
})
test('btn should be disabled for empty name', () => {
  render(<Form/>);
  const nameInput = screen.getByLabelText(/Name:/i)
  fireEvent.change(nameInput, {'target': {'value': ''}})
  const btn = screen.getByRole('button', {name: 'Submit'})
  expect(btn).toHaveAttribute('disabled');
})

test('btn should be enabled for non-empty name', () => {
  render(<Form/>);
  const nameInput = screen.getByLabelText(/Name:/i)
  fireEvent.change(nameInput, {'target': {'value': ''}})
  const btn = screen.getByRole('button', {name: 'Submit'})
  expect(btn).toHaveAttribute('disabled');
  fireEvent.change(nameInput, {'target': {'value': 'vrushal'}})
  expect(btn).not.toHaveAttribute('disabled');
})