import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Teste 1: Verifica campos de email e senha
test('renderiza os campos de email e senha', () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/e-mail/i);
  const passwordInput = screen.getByPlaceholderText(/senha/i);
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

// Teste 2: Verifica botão desabilitado inicialmente
test('botão "Acessar" está desabilitado inicialmente', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /acessar/i });
  expect(buttonElement).toBeDisabled();
});

// Teste 3: Verifica habilitação do botão
test('habilita o botão "Acessar" ao preencher os campos', () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/e-mail/i);
  const passwordInput = screen.getByPlaceholderText(/senha/i);
  const buttonElement = screen.getByRole('button', { name: /acessar/i });
  
  fireEvent.change(emailInput, { target: { value: 'usuario@exemplo.com' } });
  fireEvent.change(passwordInput, { target: { value: 'senha123' } });
  
  expect(buttonElement).not.toBeDisabled();
});

// Teste 4: Verifica tipo dos inputs
test('campos tem os tipos corretos (email e password)', () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/e-mail/i);
  const passwordInput = screen.getByPlaceholderText(/senha/i);
  expect(emailInput).toHaveAttribute('type', 'email');
  expect(passwordInput).toHaveAttribute('type', 'password');
});

// Teste 5: Verifica comportamento com apenas um campo preenchido
test('botão permanece desabilitado com apenas um campo preenchido', () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/e-mail/i);
  const buttonElement = screen.getByRole('button', { name: /acessar/i });
  
  fireEvent.change(emailInput, { target: { value: 'usuario@exemplo.com' } });
  
  expect(buttonElement).toBeDisabled();
});