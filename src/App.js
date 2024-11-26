import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getProductsThunk } from './redux/reducers/productsSlice';







function App() {

  const dispacth = useDispatch()
    const products = useSelector((state) => state.products.products)
console.log(products);
    useEffect(() => {
        dispacth(getProductsThunk())
    }, [])


  return (
   <div>

   </div>
  );
}

export default App;
