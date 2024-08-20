NewProductPage.js
// import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const NewProductPage = () => {
  const newProduct = {
    id: 2,
    name: 'Spring Edition Sneakers',
    price: 130.00,
    originalPrice: 260.00,
    discount: 50,
    images: [
      '/images/men-main.webp',
      '/images/men-2.webp',
      '/images/men-3.webp',
      '/images/men-4.webp',
    ],
    thumbnails: [
      '/images/men-main.webp',
      '/images/men-2.webp',
      '/images/men-3.webp',
      '/images/men-4.webp',
    ],
  };

  return (
    <div>
      <ProductCard product={newProduct} />
    </div>
  );
};

export default NewProductPage;
