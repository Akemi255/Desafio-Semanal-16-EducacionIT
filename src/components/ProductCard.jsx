import "/public/styles/card.css"

import PropTypes from 'prop-types';

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  };

export default ProductCard;
