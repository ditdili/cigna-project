import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header component', () => {
  test('should have a title with Item List text content', () => {
    render(<Header />);
    const titleElement = screen.getByTestId('title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(/item list/i);
  });
});
