import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './coldProducts.css';
import Coldimage1 from '../../../images/cold/item1.webp';
import Coldimage2 from '../../../images/cold/item2.webp';
import Coldimage3 from '../../../images/cold/item3.webp';
import Coldimage4 from '../../../images/cold/item4.webp';
import Coldimage5 from '../../../images/cold/item5.webp';
import Coldimage6 from '../../../images/cold/item6.webp';
import Coldimage7 from '../../../images/cold/item7.webp';
import Coldimage9 from '../../../images/cold/item9.webp';
import Coldimage10 from '../../../images/cold/item10.webp';


const ColdProducts = () => {
  const navigate = useNavigate();
  const [gridStyle, setGridStyle] = useState({});
  
    useEffect(() => {
      // Dynamically set the grid layout style using JavaScript
      const gridColumns = 5;  // Default number of cards per row
  
      // Update the grid style
      setGridStyle({
        display: 'grid',
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gap: '16px',
        padding: '16px'
      });
  }, []);
  
const ProductData = [
   // Cold Medicine
   { id: 11, name: 'Cough Syrup', category: 'Cold', price: 5.49, image: Coldimage1, description: 'Relieves cough and throat irritation.' },
   { id: 12, name: 'Nasal Spray', category: 'Cold', price: 4.99, image: Coldimage2, description: 'Clears nasal congestion.' },
   { id: 13, name: 'Menthol Rub', category: 'Cold', price: 3.99, image: Coldimage3, description: 'Soothes chest congestion and colds.' },
   { id: 14, name: 'Echinacea Tablets', category: 'Cold', price: 11.49, image: Coldimage4, description: 'Boosts immunity against colds.' },
   { id: 15, name: 'Cold Relief Tea', category: 'Cold', price: 8.49, image: Coldimage5, description: 'Herbal tea for cold symptoms.' },
   { id: 16, name: 'Cough Syrup', category: 'Cold', price: 5.49, image: Coldimage6, description: 'Relieves cough and throat irritation.' },
   { id: 17, name: 'Nasal Spray', category: 'Cold', price: 4.99, image: Coldimage7, description: 'Clears nasal congestion.' },
   { id: 18, name: 'Echinacea Tablets', category: 'Cold', price: 11.49, image: Coldimage9, description: 'Boosts immunity against colds.' },
   { id: 19, name: 'Cold Relief Tea', category: 'Cold', price: 8.49, image: Coldimage10, description: 'Herbal tea for cold symptoms.' }
  
];
const handleProductClick = (product) => {
    console.log(product); // product details
      navigate(`/product/${product.id}`, { state: { product } });
    
  };

  return (
    <div>
    <div className="ayurvethaproduct-heading">
      <h3>ColdProducts</h3>
    </div>  
    <div className="product-content" style={gridStyle}>
      {ProductData.map((product) => (
        <div
          key={product.id}
          className="product-card"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundSize: '75%', // Reduce image size to half
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '300px', // Card height
            position: 'relative',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            transition: 'transform 0.3s ease',
          }}
          onClick={() => handleProductClick(product)}
        >
          <div className="card-background" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgb(247, 242, 242)', color: 'rgb(8, 8, 8)', padding: '16px' }}>
            <h6>{product.name}</h6>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>  
  );
};

export default ColdProducts;