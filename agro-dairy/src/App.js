import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Purchase from './pages/Purchase'
import Admin from './pages/admin'
 
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [cart,setCart] = useState([]);
  const handleCallback = (id) => {
        setCart([...cart,id]);
        
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      
      <Route path='/' element={<Dashboard />} />
      <Route path='/Products' element={<Products callBack={handleCallback} />} />
      <Route path='/cart' element={<Cart props={cart} />} />
      <Route path='/Purchase' element={<Purchase />} />
      <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
