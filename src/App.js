import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Category from './pages/Category';
import Author from './pages/Author';
import Contact from './pages/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import '../src/App.css';

const App = () => {
  return (
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogpost/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/category" element={<Category />} />
            <Route path="/author/:id" element={<Author/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
};

export default App;
