import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import "/public/styles/productForm.css"

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useLocalStorage('products', []);


  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificamos que los campos no estén vacíos
    if (!name || !description || !price) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    
    const newProduct = {
      id: Date.now(), // Generando un ID único usando la marca de tiempo
      name: name,
      description: description,
      price: price
    };

    // Reiniciando los campos del formulario
    setName('');
    setDescription('');
    setPrice('');

    
    setProducts([...products, newProduct]);

    
    setTimeout(() => {
      history.go(0);
    }, 500);
  };

  return (
    <div className="product-form-container"> 
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit} className="product-form"> 
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default ProductForm;
