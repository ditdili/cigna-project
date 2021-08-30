import { Header } from './components/Header';
import { ItemList } from './components/ItemList';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div>Search Placeholder</div>
      <ItemList />
    </div>
  );
};

export default App;
