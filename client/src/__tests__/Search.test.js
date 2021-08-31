import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Search } from '../components/Search';
import { StoreProvider, StoreContext } from '../features/store';

describe('Search component', () => {
  describe('With input component', () => {
    beforeEach(() => {
      jest.spyOn(window, 'fetch');

      render(
        <StoreProvider>
          <Search />
        </StoreProvider>
      );
    });

    afterEach(() => jest.restoreAllMocks());

    test('should render an input with a text type', () => {
      const inputElement = screen.getByPlaceholderText(/search/i);
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute('type', 'text');
    });

    test('should call the right api', () => {
      expect(window.fetch).toHaveBeenCalledWith(
        'http://localhost:5000/individuals'
      );
      expect(window.fetch).toHaveBeenCalledTimes(1);
    });

    test('should check if input value is changed onChange', () => {
      const testValue = 'art';
      const inputElement = screen.getByPlaceholderText(/search/i);
      user.type(inputElement, testValue);
      expect(inputElement).toHaveValue(testValue);
    });
  });

  test('should call setList with provided data', async () => {
    jest.spyOn(window, 'fetch');
    const setList = jest.fn();

    render(
      <StoreContext.Provider value={{ setList }}>
        <Search />
      </StoreContext.Provider>
    );

    const testValue = 'a';
    const inputElement = screen.getByPlaceholderText(/search/i);
    user.type(inputElement, testValue);

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

    const mocked = window.fetch.mockResolvedValue({
      json: () => {
        return { results: returnValues.results };
      },
    });

    expect(mocked).toHaveBeenCalledWith(
      'http://localhost:5000/individuals/?text=a'
    );

    await waitFor(() => {
      expect(setList).toHaveBeenCalledTimes(1);
    });

    jest.restoreAllMocks();
  });
});
