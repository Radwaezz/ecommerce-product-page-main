import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../CartContext/CartContext';
import './AddToCartButton.css';
import IconCart from '../../../public/images/icon-cart.svg';
import Minus from '../../../public/images/icon-minus.svg';
import Plus from '../../../public/images/icon-plus.svg';

const AddToCartButton = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => Math.max(0, prev - 1));

  const handleInputChange = (event) => {
    const value = Math.max(0, parseInt(event.target.value, 10) || 0);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      console.log(`Added ${quantity} ${product.name} to cart`);
      setQuantity(0);
    } else {
      alert('Please select at least one item to add to the cart.');
    }
  };

  return (
    <div className="add-to-cart">
      <div className="quantity-selector">
        <button className="minus" onClick={decrement}><img src={Minus} alt="Minus" /></button>
        <input
          type="number"
          value={quantity}
          min="0"
          onChange={handleInputChange}
        />
        <button className="plus" onClick={increment}><img src={Plus} alt="Plus" /></button>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        <img className='cart' src={IconCart} alt="Cart Icon" /> Add to cart
      </button>
    </div>
  );
};

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddToCartButton;