import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Categories from './components/Categories';
import TrendingSection from './components/TrendingSection';
import BrandsSection from './components/BrandsSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

// Category Pages
import WomenEthnic from './pages/WomenEthnic';
import WomenWestern from './pages/WomenWestern';
import Men from './pages/Men';
import Kids from './pages/Kids';
import HomeKitchen from './pages/HomeKitchen';
import BeautyHealth from './pages/BeautyHealth';
import Jewellery from './pages/Jewellery';
import BagsFootwear from './pages/BagsFootwear';
import Electronics from './pages/Electronics';

// Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';

// Product and Payment Pages
import ProductDetail from './pages/ProductDetail';
import PaymentDashboard from './pages/PaymentDashboard';

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <TrendingSection />
      <BrandsSection />
      <ProductGrid />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Auth Routes - No Header/Navigation */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Main App Routes - With Header/Navigation */}
          <Route path="/*" element={
            <>
              <Header />
              <Navigation />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/women-ethnic" element={<WomenEthnic />} />
                <Route path="/women-western" element={<WomenWestern />} />
                <Route path="/men" element={<Men />} />
                <Route path="/kids" element={<Kids />} />
                <Route path="/home-kitchen" element={<HomeKitchen />} />
                <Route path="/beauty-health" element={<BeautyHealth />} />
                <Route path="/jewellery" element={<Jewellery />} />
                <Route path="/bags-footwear" element={<BagsFootwear />} />
                <Route path="/electronics" element={<Electronics />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/payment-dashboard" element={<PaymentDashboard />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;