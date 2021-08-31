import { Header } from './components/Header';
import { Search } from './components/Search';
import { ItemList } from './components/ItemList';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <ItemList />
    </div>
  );
};

export default App;
