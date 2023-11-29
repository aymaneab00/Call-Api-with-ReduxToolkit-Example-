import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './redux/Productslicer';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(s => s.produits.loading)
  const produits = useSelector(state => state.produits.data)
  useEffect(
    () => {
      dispatch(getProducts())
    }

  )
  return (
    <div className="App">
      {loading ? <h1>
        Page loading
      </h1> : produits.map((p ,i)=>
        <h1 key={i}>
          {p.title}
        </h1>)}
    </div>
  );
}

export default App;
