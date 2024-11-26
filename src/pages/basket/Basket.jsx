import React, { useEffect, useState } from 'react'
import Header from '../../components/sections/Header/Header'
import Footer from '../../components/Footer/Footer'

const Basket = () => {

    // const [basket, setBasket] = useState([]);
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //       try {
           
    //         const response = await fetch('https://dummyjson.com/products');
    //         const data = await response.json();
    //         setProducts(data); 
    //         setLoading(false);  
    //       } catch (error) {
    //         console.error('API error:', error);
    //         setLoading(false);  
    //       }
    //     };
    
    //     fetchProducts();
    //   }, []); 

    //   useEffect(() => {
    //     const savedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    //     setBasket(savedBasket);
    //   }, []);

    //   const addToBasket = (product) => {
       
    //     if (!basket.find(item => item.id === product.id)) {
    //       const newBasket = [...basket, product];
    //       setBasket(newBasket);

    //       localStorage.setItem('basket', JSON.stringify(newBasket));
    //     } else {
    //       alert("Elave edilib.");
    //     }
    //   };
    
  return (
    <div>

      <Header />
      <Footer/>

    {/* <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - {product.price} 
          <button onClick={() => addToBasket(product)}>Sepete Ekle</button>
        </li>
      ))}
    </ul> */}
</div>
  )
}

export default Basket