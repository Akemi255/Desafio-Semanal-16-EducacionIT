import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductListWithFetch from "./components/ProductListWithFetch";


const App = () => {
  return (
    <div className="container"> 
    <div className="product-form-container"> 
      <ProductForm />
    </div>
    <div className="product-list-container"> 
      <ProductList />
      <ProductListWithFetch />
    </div>
  </div>
  );
};

export default App;