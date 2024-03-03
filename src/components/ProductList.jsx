import  { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import "/public/styles/productList.css"

const ProductList = () => {
  const [products, setProducts] = useLocalStorage('products', []);
  const [editProductId, setEditProductId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    history.go(0)  
  };

  const handleEdit = (product) => {
    setEditProductId(product.id);
    setEditFormData({
      name: product.name,
      description: product.description,
      price: product.price
    });
  };

  const handleEditChange = (event) => {
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value
    });
  };

  const handleEditSubmit = (productId) => {
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, ...editFormData } : product
    );
    setProducts(updatedProducts);
    setEditProductId(null);
  };

  return (
    <div className='product-list-container'>
      <h2>Product List usando LocalStorage</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            {editProductId === product.id ? (
              <form onSubmit={() => handleEditSubmit(product.id)}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={editFormData.name}
                  onChange={handleEditChange}
                  className="edit-input"
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={editFormData.description}
                  onChange={handleEditChange}
                  className="edit-input"
                />
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  value={editFormData.price}
                  onChange={handleEditChange}
                  className="edit-input"
                />
                <button type="submit" className="save-btn">Save</button>
              </form>
            ) : (
              <>
                <span className="product-info">
                  {product.name} - {product.description} - ${product.price}
                </span>
                <div>
                <button onClick={() => handleDelete(product.id)} className="delete-btn">Delete</button>
                <button onClick={() => handleEdit(product)} className="edit-btn">Edit</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
