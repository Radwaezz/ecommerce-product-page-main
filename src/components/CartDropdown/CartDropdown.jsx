// import React from 'react';
// import PropTypes from 'prop-types';
// import './CartDropdown.css';

// const CartDropdown = ({ cart, isOpen, toggleDropdown }) => {
//   // Calculate the total price for each item and the cart total
//   const getTotalPrice = (price, quantity) => price * quantity;

//   return (
//     <div className={`cart-dropdown ${isOpen ? 'open' : ''}`}>
//       <button onClick={toggleDropdown} className="close-dropdown">×</button>
//       <div className="dropdown-header">
//         <h5 className="empty-cart-title">Cart</h5>
//         <hr className="empty-cart-line" />
//       </div>

//       {cart.length === 0 ? (
//         <div className="empty-cart">
//           <p className="empty-cart-message">Your cart is empty</p>
//         </div>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.images[0]} alt={item.name} />
//             <div className="item-details">
//               <p className='item'>{item.name}</p>
//               <p className='price-quantity'>
//                 <span className='price'>{`$${item.price.toFixed(2)}`}</span>
//                 <span className='quantity'>
//                   {` x${item.quantity}`} 
//                   <span className='total-price'>{`$${getTotalPrice(item.price, item.quantity).toFixed(2)}`}</span>
//                 </span>
//               </p>
//             </div>
//           </div>
//         ))
//       )}
//       {cart.length > 0 && (
//         <div className="cart-total">
//           <button className="checkout-button">Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// CartDropdown.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       images: PropTypes.arrayOf(PropTypes.string).isRequired,
//       price: PropTypes.number.isRequired,
//       quantity: PropTypes.number.isRequired
//     })
//   ).isRequired,
//   isOpen: PropTypes.bool.isRequired,
//   toggleDropdown: PropTypes.func.isRequired,
// };

// export default CartDropdown;
// src/components/CartDropdown/CartDropdown.js
import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../CartContext/CartContext'; // Import useCart
import './CartDropdown.css';

const CartDropdown = ({ isOpen, toggleDropdown }) => {
  const { cart } = useCart(); // Access cart from context

  const getTotalPrice = (price, quantity) => price * quantity;

  return (
    <div className={`cart-dropdown ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className="close-dropdown">×</button>
      <div className="dropdown-header">
        <h5 className="empty-cart-title">Cart</h5>
        <hr className="empty-cart-line" />
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-cart-message">Your cart is empty</p>
        </div>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.images[0]} alt={item.name} />
            <div className="item-details">
              <p className='item'>{item.name}</p>
              <p className='price-quantity'>
                <span className='price'>{`$${item.price.toFixed(2)}`}</span>
                <span className='quantity'>{` x${item.quantity}`} <span className='total-price'>{`$${getTotalPrice(item.price, item.quantity).toFixed(2)}`}</span></span>
              </p>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

CartDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default CartDropdown;

