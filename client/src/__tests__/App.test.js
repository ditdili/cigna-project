import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';
import { Header } from '../components/Header';
import { ItemList } from '../components/ItemList';
import { Search } from '../components/Search';

describe('App component', () => {
  test('should have a Header, Search and ItemList', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);

    const result = renderer.getRenderOutput();

    expect(result.type).toBe('div');
    expect(result.props.children).toEqual([
      <Header />,
      <Search />,
      <ItemList />,
    ]);
  });
});
