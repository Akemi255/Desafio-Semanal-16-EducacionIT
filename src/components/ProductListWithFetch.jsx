import { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; 


const ProductListWithFetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5173//public/data/data.json");
        const data = await response.json();
        setProducts(data.pizzas); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llama a la función fetchData al cargar el componente
  }, []);

  return (
    <div>
      <h2>Product List con Fetch</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListWithFetch;
