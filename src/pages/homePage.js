import './homePage.css';
import banner1 from '../images/homeSlider/pharmacy-banner1.png';
import banner2 from '../images/homeSlider/pharmacy-banner2.png';
import banner3 from '../images/homeSlider/pharmacy-banner3.jpg';
import banner4 from '../images/homeSlider/pharmacy-banner4.jpg';
import ProductImage1 from '../images/ayurveda/ayurveda.jpg';
import ProductImage2 from '../images/homopathy/1705991074_Category_Banner_Web.png';
import ProductImage3 from '../images/skincare/skincare3.jpg';
import ProductImage4 from '../images/personalcare/1695202303_Personal-care.jpg';
import ShopCategories1 from '../images/shopByCategories/item1.webp'
import ShopCategories2 from '../images/shopByCategories/item2.webp'
import ShopCategories3 from '../images/shopByCategories/item3.webp'
import ShopCategories4 from '../images/shopByCategories/item4.webp'
import ShopCategories5 from '../images/shopByCategories/item5.webp'
import ShopCategories6 from '../images/shopByCategories/item6.webp'
import ShopCategories7 from '../images/shopByCategories/item7.webp'
import ShopCategories8 from '../images/shopByCategories/item8.webp'
import ShopCategories9 from '../images/shopByCategories/item9.webp'
import ShopCategories10 from '../images/shopByCategories/item10.webp'
import ShopCategories11 from '../images/shopByCategories/item11.webp'
import ShopCategories12 from '../images/shopByCategories/item12.webp'
import ShopCategories13 from '../images/shopByCategories/item13.webp'
import ShopCategories14 from '../images/shopByCategories/item14.webp'
import ShopCategories15 from '../images/shopByCategories/item15.webp'
import storeimg from '../images/store.png'
import locationimg from '../images/location.png'
import userimg from '../images/user.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import "react-multi-carousel/lib/styles.css";
import MultiCarousel from "react-multi-carousel";

const HomePage = () => {

    // Responsive configuration for react-multi-carousel
    const responsive1 = {
        superLargeDesktop: { breakpoint: { max: 3000, min: 1920 }, items: 2 },
        desktop: { breakpoint: { max: 1920, min: 1024 }, items: 2 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }, // Adjust for tablet
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },   // Adjust for mobile
    };
    
    const responsive2 = {
        superLargeDesktop: { breakpoint: { max: 3000, min: 1920 }, items: 5 },
        desktop: { breakpoint: { max: 1920, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 }, // Adjust for smaller screens
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },    // Show one item per screen for mobile
    };
    
    return (
        <div className="homepage-container">
            {/* React Responsive Carousel */}
            <ResponsiveCarousel
                autoPlay
                infiniteLoop
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                interval={3000}
            >
            <div className='img-responsivecarousel'>
                    <img src={banner1} alt="banner1" className="imag1" />
                    
                </div>
                <div className='img-responsivecarousel'>
                    <img src={banner2} alt="banner2" className="imag1" />
                    
                </div>
                <div className='img-responsivecarousel'>
                    <img src={banner3} alt="banner3" className="imag1" />
                    
                </div>
                <div className='img-responsivecarousel'>
                    <img src={banner4} alt="banner4" className="imag1" />
                    <div className='banner-content'>
                    <h1>Online Medical Store</h1>
                    </div>
                </div>
            </ResponsiveCarousel>

            {/* Products Section */}
            <div className='products-Item'>
                <div className='products-Item-title'>
                   <h1>Products Item</h1>
                </div>
                {/* React Multi Carousel */}
                <MultiCarousel
                    responsive={responsive1}
                    autoPlay
                    autoPlaySpeed={3000}
                    infinite
                    showDots
                    arrows={false}
                >
                    <div className='img-muliti'>
                        <img src={ProductImage1} alt="Product Slide 1" className="imag" />
                    </div>
                    <div className='img-muliti'>
                        <img src={ProductImage2} alt="Product Slide 2" className="imag" />
                    </div>
                    <div className='img-muliti'>
                        <img src={ProductImage3} alt="Product Slide 3" className="imag" />
                    </div>
                    <div className='img-muliti'>
                        <img src={ProductImage4} alt="Product Slide 4" className="imag" />
                    </div>
                </MultiCarousel>
            </div>
            <div className='shopby-categories'>
                <div className='shopby-categories-title'>
                   <h1>Shop by Categories</h1>
                </div>
                {/* React Multi Carousel */}
                <MultiCarousel
                    responsive={responsive2}
                    // autoPlay
                    // autoPlaySpeed={3000}
                    infinite
                    // showDots
                    arrows
                >
                    <div className='img-muliti2'>
                        <img src={ShopCategories2}  className="imag2" />
                        <h4>Sports Nutrition</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories3}  className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories4}  className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories5}  className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories6}  className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories7}  className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories8}  className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories9}  className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories10} className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories11} className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories12} className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories13}  className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories14} className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                    <div className='img-muliti2'>
                        <img src={ShopCategories15}  className="imag2" />
                        <h4>HomeyopathyCare</h4>
                    </div>
                </MultiCarousel>
            </div>
            <div className="features-section">
                <div className="feature">
                    <img src={storeimg} className="storeimg" />
                    <h3>Online Store</h3>
                    <p>Shop medicines and healthcare products at your convenience.</p>
                </div>
                <div className="feature">
                    <img src={locationimg} className="locationimg"/>
                    <h3>Pincode Serves</h3>
                    <p>Check if your location is serviceable for deliveries.</p>
                </div>
                <div className="feature" >
                    <img src={userimg} className="userimg"/>
                    <h3>Happy Customers</h3>
                    <p>Join our 10,000+ satisfied customers.</p>
                </div>
            </div>


        </div>
    );
};

export default HomePage;
