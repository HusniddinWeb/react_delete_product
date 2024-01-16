import { useState } from 'react';
import './App.css';
import Main from './components/main/Main';
import Result from './components/result/Result';

function App() {

  const [products, setProducts] = useState([])

  return (
    <div className="App">
      <Main products={products} setProducts={setProducts} />
      <Result products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
