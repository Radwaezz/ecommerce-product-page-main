// import ProductGallery from '../ProductGallery/ProductGallery';
// import AddToCartButton from '../AddToCartButton/AddToCartButton';
// import PriceTag from '../PriceTag/PriceTag';

// import './ProductCard.css';

// const ProductCard = () => {
//   const product = {
//     id: 1,
//     name: 'Fall Limited Edition Sneakers',
//     price: 125.00,
//     originalPrice: 250.00,
//     discount: 50,
//     images: [
//       '/images/image-product-1-thumbnail.jpg',
//       '/images/image-product-2-thumbnail.jpg',
//       '/images/image-product-3-thumbnail.jpg',
//       '/images/image-product-4-thumbnail.jpg',
//     ],
//   };

//   return (
//     <div className="product-card">
//       <ProductGallery images={product.images} />
//       <div className="product-details">
//         <p className="product-brand">Sneaker Company</p>
//         <h2 className="product-title">{product.name}</h2>
//         <p className="product-description">
//           These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
//         </p>
//         <PriceTag 
//           price={product.price} 
//           originalPrice={product.originalPrice} 
//           discount={product.discount} 
//         />
//         <div className="product-actions">
//           <AddToCartButton product={product} /> {/* Pass product to AddToCartButton */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// ProductCard.js
import ProductGallery from '../ProductGallery/ProductGallery';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import PriceTag from '../PriceTag/PriceTag';
import './ProductCard.css';

const ProductCard = () => {
  const product = {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    price: 125.00,
    originalPrice: 250.00,
    discount: 50,
    images: [
      '/images/image-product-1.jpg',
      '/images/image-product-2.jpg',
      '/images/image-product-3.jpg',
      '/images/image-product-4.jpg',
    ],
    thumbnails: [
      '/images/image-product-1-thumbnail.jpg',
      '/images/image-product-2-thumbnail.jpg',
      '/images/image-product-3-thumbnail.jpg',
      '/images/image-product-4-thumbnail.jpg',
    ],
  };

  return (
    <div className="product-card">
      <ProductGallery images={product.images} thumbnails={product.thumbnails} />
      <div className="product-details">
        <p className="product-brand">Sneaker Company</p>
        <h2 className="product-title">{product.name}</h2>
        <p className="product-description">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
        </p>
        <PriceTag 
          price={product.price} 
          originalPrice={product.originalPrice} 
          discount={product.discount} 
        />
        <div className="product-actions">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
