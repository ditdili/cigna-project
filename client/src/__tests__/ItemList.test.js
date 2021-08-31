import { render, screen, waitFor, within } from '@testing-library/react';
import { ItemList } from '../components/ItemList';
import { Search } from '../components/Search';
import { StoreProvider } from '../features/store';

const returnValues = {
  results: [
    {
      name: 'Louis Pasteur',
      specialty: 'Molecular Asymmetry',
    },
    {
      name: 'Dr. Jean-Martin Charcot',
      specialty: 'Pathology',
    },
  ],
};

describe('ItemList component', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch');

    render(
      <StoreProvider>
        <Search />
        <ItemList />
      </StoreProvider>
    );

    window.fetch.mockReturnValue(returnValues);
  });

  afterEach(() => jest.restoreAllMocks());

  test('should have a table with Name and Specialty columns', () => {
    const table = screen.getByTestId('table');
    expect(table).toBeInTheDocument();

    const [columnNames] = within(table).getAllByRole('rowgroup');
    expect(within(columnNames).getByText(/name/i)).toBeInTheDocument();
    expect(within(columnNames).getByText(/specialty/i)).toBeInTheDocument();
  });

  test('should return a table body with rows and data provided', async () => {
    const { results } = returnValues;

    const row = await waitFor(() => screen.getByTestId('row-0'));
    expect(within(row).getByText(results[0].name)).toBeInTheDocument();
  });
});
