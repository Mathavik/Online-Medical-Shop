import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from './components/products/CartContext';
import { OrderProvider } from './components/products/ordercontext/orderContext'; 
import { UserProvider } from './components/products/ordercontext/userContext'; 
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import Header from './components/header';
import Footer from './components/footer';
import LoginPage from './pages/loginPage';
import MyOrderPage from './pages/myOrderPage';
import ProductPage from './pages/productPage';
import CartPage from './pages/cartPage';
import ProductDetails from './components/products/productDetails';
import CheckoutPage from './components/products/checkoutPage';
import SuccessPage from './components/products/successPage';
import RegisterPage from './components/registerPage';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <CartProvider>
        <OrderProvider> {/* Wrap your app with both providers */}
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/productPage" element={<ProductPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cartPage" element={<CartPage />} />
              <Route path="/aboutPage" element={<AboutPage />} />
              <Route path="/loginPage" element={<LoginPage />} />
              <Route path="/myOrderPage" element={<MyOrderPage />} />
              <Route path="/checkoutPage" element={<CheckoutPage />} />
              <Route path="/successPage" element={<SuccessPage />} />
              <Route path="/registerPage" element={<RegisterPage />} />
            </Routes>
            <Footer />
          </Router>
        </OrderProvider>
      </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
