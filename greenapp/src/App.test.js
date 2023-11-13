// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders current time without errors', () => {
  // Render the component
  render(<App />);

  // Check if the component renders without errors
  expect(screen.getByText(/Local Time and To-Do List/i)).toBeInTheDocument();

  // Check if the current time is displayed
  expect(screen.getByText(/Current Time:/i)).toBeInTheDocument();
});

// You can add more specific tests for the clock if needed
