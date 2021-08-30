import { render, screen, within } from '@testing-library/react';
import { ItemList } from '../components/ItemList';
import { StoreProvider } from '../features/store';

describe('ItemList component', () => {
  test('should have a table with Name and Specialty columns', () => {
    render(
      <StoreProvider>
        <ItemList />
      </StoreProvider>
    );
    const table = screen.getByTestId('table');
    expect(table).toBeInTheDocument();

    const [columnNames] = within(table).getAllByRole('rowgroup');
    expect(within(columnNames).getByText(/name/i)).toBeInTheDocument();
    expect(within(columnNames).getByText(/specialty/i)).toBeInTheDocument();
  });
});
