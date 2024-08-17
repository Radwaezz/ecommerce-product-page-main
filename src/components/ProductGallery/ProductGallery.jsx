// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import './ProductGallery.css';

// const ProductGallery = ({ images, thumbnails }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   return (
//     <div className="product-gallery">
//       <div className="main-image">
//         <img src={images[currentImageIndex]} alt={`Product view ${currentImageIndex + 1}`} />
//       </div>
//       <div className="thumbnails">
//         {thumbnails.map((thumbnail, index) => (
//           <img
//             key={index}
//             src={thumbnail}
//             alt={`Thumbnail ${index + 1}`}
//             className={index === currentImageIndex ? 'active' : ''}
//             onClick={() => setCurrentImageIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// ProductGallery.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default ProductGallery; the main jsx 
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import './ProductGallery.css';

// const ProductGallery = ({ images, thumbnails }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   return (
//     <div className="product-gallery">
//       <div className="main-image-container">
//         <button className="nav-button prev" onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}>
//           &lt;
//         </button>
//         <img src={images[currentImageIndex]} alt="Product" className="main-image" />
//         <button className="nav-button next" onClick={() => setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}>
//           &gt;
//         </button>
//         <button className="close-button">&times;</button>
//       </div>
//       <div className="thumbnails-container">
//         {thumbnails.map((thumbnail, index) => (
//           <img
//             key={index}
//             src={thumbnail}
//             alt={`Thumbnail ${index + 1}`}
//             className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
//             onClick={() => setCurrentImageIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// ProductGallery.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default ProductGallery; second section
import { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductGallery.css';

const ProductGallery = ({ images, thumbnails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <img
          src={images[currentImageIndex]}
          alt="Product"
          className="main-image"
          onClick={openPopup}
        />
      </div>
      <div className="thumbnails-container">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-button" onClick={closePopup}>
              &times;
            </button>
            <button
              className="popup-nav-button prev"
              onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
            >
              &lt;
            </button>
            <img
              src={images[currentImageIndex]}
              alt="Popup Product"
              className="popup-main-image"
            />
            <button
              className="popup-nav-button next"
              onClick={() => setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
            >
              &gt;
            </button>
            <div className="popup-thumbnails">
              {thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Popup Thumbnail ${index + 1}`}
                  className={`popup-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductGallery;
