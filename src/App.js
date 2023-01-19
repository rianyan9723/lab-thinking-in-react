// App.js
import './App.css';
import ProductTable from './components/ProductTable';
import ProductsPage from './components/ProductsPage';
import SearchBar from './components/SearchBar';



function App() {
  return (
    <div className="App">
      <ProductsPage />
      <SearchBar />
      <ProductTable />
    </div>
  );
}

export default App;
