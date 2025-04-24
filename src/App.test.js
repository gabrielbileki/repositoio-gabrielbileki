import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Teste 1: Verifica se o título "Login" está renderizado
test('renderiza o título "Login"', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /login/i });
  expect(titleElement).toBeInTheDocument();
});

// Teste 2: Verifica se o botão "Acessar" está renderizado
test('renderiza o botão "Acessar"', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /acessar/i });
  expect(buttonElement).toBeInTheDocument();
});

// Teste 3: Verifica se os campos de email e senha estão renderizados
test('renderiza os campos de email e senha', () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/e-mail/i);
  const passwordInput = screen.getByPlaceholderText(/senha/i);
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

// Teste 4: Verifica se o botão "Acessar" está desabilitado inicialmente (campos vazios)
test('botão "Acessar" está desabilitado inicialmente', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /acessar/i });
  expect(buttonElement).toBeDisabled(); // Agora deve passar!
});

// Teste 5: Simula a digitação nos campos e verifica se o botão é habilitado
test('habilita o botão "Acessar" ao preencher os campos', () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/e-mail/i);
  const passwordInput = screen.getByPlaceholderText(/senha/i);
  const buttonElement = screen.getByRole('button', { name: /acessar/i });

  // Simula a digitação
  fireEvent.change(emailInput, { target: { value: 'usuario@exemplo.com' } });
  fireEvent.change(passwordInput, { target: { value: 'senha123' } });

  // Verifica se o botão foi habilitado
  expect(buttonElement).not.toBeDisabled();
});