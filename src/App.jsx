import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Footer from './pages/Footer';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  // Conditionally render the Footer only on the home page
  const renderFooter = location.pathname === '/';

  return (
    <>
      <div className='bg-slate-900 shadow-lg'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      {renderFooter && <Footer />}
    </>
  );
};

export default App;