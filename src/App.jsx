import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// ... (Imports kept the same)
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Marketplace from './pages/Marketplace';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Tracking from './pages/Tracking';
import LearnMorePage from './pages/LearnMorePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DashboardLayout from './Dashboard/DashboardLayout';
import Overview from './Dashboard/Overview';
import StockManagement from './Dashboard/StockManagement';
import Reports from './Dashboard/Reports';
import Alerts from './Dashboard/Alerts';
import Settings from './Dashboard/Settings';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Layouts
const PublicLayout = ({ children, user, setUser, cartCount }) => (
  <>
    <Navbar user={user} setUser={setUser} cartCount={cartCount} />
    {children}
    <Footer />
  </>
);

const ManagerLayout = ({ children, user, handleLogout }) => {
  if (!user || (user.role !== 'MANAGER' && user.role !== 'ADMIN')) {
    return <Navigate to="/login" replace />;
  }
  // 🟢 FIX: Pass 'user' prop here so header shows "ADMIN" instead of "Manager"
  return (
    <DashboardLayout handleLogout={handleLogout} user={user}>
      {children}
    </DashboardLayout>
  );
};

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('lksupply_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user) localStorage.setItem('lksupply_user', JSON.stringify(user));
    else localStorage.removeItem('lksupply_user');
  }, [user]);

  const addToCart = (product) => { setCartItems([...cartItems, product]); alert(`${product.name} added to cart!`); };
  const removeFromCart = (index) => { const newCart = [...cartItems]; newCart.splice(index, 1); setCartItems(newCart); };
  const clearCart = () => setCartItems([]);

  // Dashboard Props (Though most pages fetch their own data now)
  const [stocks] = useState([]);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PublicLayout user={user} setUser={setUser} cartCount={cartItems.length}><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout user={user} setUser={setUser} cartCount={cartItems.length}><About /></PublicLayout>} />
        <Route path="/services" element={<PublicLayout user={user} setUser={setUser} cartCount={cartItems.length}><Services /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout user={user} setUser={setUser} cartCount={cartItems.length}><Contact /></PublicLayout>} />
        <Route path="/privacy" element={<PublicLayout user={user} setUser={setUser} cartCount={cartItems.length}><PrivacyPolicy /></PublicLayout>} />
        <Route path="/terms" element={<PublicLayout user={user} setUser={setUser} cartCount={cartItems.length}><TermsOfService /></PublicLayout>} />
        <Route path="/:topic" element={<PublicLayout user={user} setUser={setUser} cartCount={cartItems.length}><LearnMorePageWrapper /></PublicLayout>} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/tracking" element={<PublicLayout user={user} setUser={setUser} cartCount={cartItems.length}><Tracking /></PublicLayout>} />

        <Route path="/marketplace" element={
          <PublicLayout user={user} setUser={setUser} cartCount={cartItems.length}>
            <Marketplace addToCart={addToCart} user={user} />
          </PublicLayout>
        } />
        <Route path="/cart" element={
          <PublicLayout user={user} setUser={setUser} cartCount={cartItems.length}>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />
          </PublicLayout>
        } />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={
          <ManagerLayout user={user} handleLogout={() => setUser(null)}>
            <Overview user={user} />
          </ManagerLayout>
        } />
        <Route path="/dashboard/stocks" element={
          <ManagerLayout user={user} handleLogout={() => setUser(null)}>
            <StockManagement user={user} />
          </ManagerLayout>
        } />
        <Route path="/dashboard/reports" element={
          <ManagerLayout user={user} handleLogout={() => setUser(null)}>
            <Reports />
          </ManagerLayout>
        } />
        <Route path="/dashboard/alerts" element={
          <ManagerLayout user={user} handleLogout={() => setUser(null)}>
            <Alerts stocks={stocks} user={user} />
          </ManagerLayout>
        } />
        <Route path="/dashboard/settings" element={
          <ManagerLayout user={user} handleLogout={() => setUser(null)}>
            <Settings user={user} />
          </ManagerLayout>
        } />
      </Routes>
    </Router>
  );
}

const LearnMorePageWrapper = () => {
  const location = useLocation();
  const topic = location.pathname.substring(1);
  const validTopics = ['modern-farming', 'supply-chain', 'export-quality', 'agri-tech'];
  if (!validTopics.includes(topic)) return <Navigate to="/" replace />;
  return <LearnMorePage topic={topic} />;
};

export default App;