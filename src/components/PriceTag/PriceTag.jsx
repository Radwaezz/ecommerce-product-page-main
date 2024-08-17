
import PropTypes from 'prop-types';
import './PriceTag.css';

const PriceTag = ({ price, originalPrice, discount }) => {
  return (
    <div className="price-tag">
      <span className="current-price">${price.toFixed(2)}</span>
      {discount && (
        <span className="discount">{discount}% </span>
      )}
      {originalPrice && (
        <span className="original-price">${originalPrice.toFixed(2)}</span>
      )}
    </div>
  );
};

// Define prop types for the component
PriceTag.propTypes = {
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  discount: PropTypes.number,
};

export default PriceTag;
