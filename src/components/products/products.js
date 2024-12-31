import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './products.css';
import Ayurvedaimage1 from '../../images/ayurveda/ayurvedaItems/item1.jpg';
import Ayurvedaimage2 from '../../images/ayurveda/ayurvedaItems/item2.jpg';
import Ayurvedaimage3 from '../../images/ayurveda/ayurvedaItems/item3.jpg';
import Ayurvedaimage4 from '../../images/ayurveda/ayurvedaItems/item4.jpg';
import Ayurvedaimage5 from '../../images/ayurveda/ayurvedaItems/item5.jpg';
import Ayurvedaimage6 from '../../images/ayurveda/ayurvedaItems/item6.jpg';
import Ayurvedaimage7 from '../../images/ayurveda/ayurvedaItems/item7.jpg';
import Ayurvedaimage8 from '../../images/ayurveda/ayurvedaItems/item8.jpg';
import Ayurvedaimage9 from '../../images/ayurveda/ayurvedaItems/item9.jpg';
import Ayurvedaimage10 from '../../images/ayurveda/ayurvedaItems/item10.jpg';

const AyurvedaProducts = () => {
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
    // Ayurveda Medicine
    { id: 1, medicienName: 'Triphala Powder', category: 'Ayurveda', price: 10.00, image: Ayurvedaimage1, description: 'A natural digestive supplement.',brand: 'Herbal Life',type: 'Powder', },
    { id: 2, medicienName: 'Ashwagandha Tablets', category: 'Ayurveda', price: 15.00, image: Ayurvedaimage2, description: 'Helps in stress relief and boosts energy.' ,brand: 'Nature\'s Cure',type: 'Tablet' },
    { id: 3, medicienName: 'Chyawanprash', category: 'Ayurveda', price: 8.00, image: Ayurvedaimage3, description: 'Immunity-boosting herbal jam.',brand: 'Ayurveda Classics', type: 'Jam' },
    { id: 4, medicienName: 'Brahmi Capsules', category: 'Ayurveda', price: 12.00, image: Ayurvedaimage4, description: 'Enhances memory and focus.',brand: 'Mind Boost',type: 'Capsule' },
    { id: 5, medicienName: 'Neem Tablets', category: 'Ayurveda', price: 9.00, image: Ayurvedaimage5, description: 'Supports healthy skin and detoxification.',brand: 'Pure Neem',type: 'Tablet' },
    { id: 6, medicienName: 'Amla Powder', category: 'Ayurveda', price: 7.00, image: Ayurvedaimage6, description: 'Rich in vitamin C for hair and skin health.',brand: 'Healthy Glow',type: 'Powder' },
    { id: 7, medicienName: 'Shilajit Resin', category: 'Ayurveda', price: 19.00, image: Ayurvedaimage7, description: 'Improves stamina and vitality.',rand: 'Stamina Plus',type: 'Resin' },
    { id: 8, medicienName: 'Kumkumadi Oil', category: 'Ayurveda', price: 29.00, image: Ayurvedaimage8, description: 'Ayurvedic facial oil for glowing skin.', brand: 'Skin Radiance',type: 'Oil' },
    { id: 9, medicienName: 'Trikatu Churna', category: 'Ayurveda', price: 6.00, image: Ayurvedaimage9, description: 'Improves digestion and metabolism.',brand: 'Digestive Aid',type: 'Powder'},
    { id: 10, medicienName: 'Dashmoolarista', category: 'Ayurveda', price: 14.00, image: Ayurvedaimage10, description: 'A tonic for women\'s health.',brand: 'Ayurveda Tonic',type: 'Tonic' },
  ];
  const handleProductClick = (product) => {
    console.log(product); // product details
      navigate(`/product/${product.id}`, { state: { product } });
    
  };

  return (
    <div>
    <div className="ayurvethaproduct-heading">
      <h3>Ayurvetha</h3>
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
            <h6>{product.medicienName}</h6>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>  
  );
};

export default AyurvedaProducts;
