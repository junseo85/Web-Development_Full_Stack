// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Import Components, styles, media
import Navigation from './components/Navigation.js';
import HomePage from './pages/HomePage.js';


// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.
import GalleryPage from './pages/GalleryPage.js';
import Order from './pages/Order.js';
import Product from './data/products.js';
import LogPage from './pages/LogPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';

import TopicsPage from './pages/TopicsPage.js';
import ContactPage from './pages/Contact.js';

import './App.css';
// Define the function that renders the content in Routes, using State.
function App() {
  const [award, setAward] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>

          <header className="App-header">
            <h1><i><img src="./favicon-32x32.png" className="App-logo" alt=" Jun Seo's Demo site"></img></i>Jun Seo</h1>
            
          </header>

          <Navigation />

          <main>
            <section className='App-article'>
                <Routes> 
                    <Route path="/" exact element={<HomePage setAward={setAward} />} />
                    <Route path="/ContactPage" element={<ContactPage />} />
                    <Route path="/LogPage" element={<LogPage />} />
                    <Route path="/CreatePage" element={<CreatePage />} />
                    <Route path="/EditPage" element={<EditPage award={award} />} />
                    <Route path="/TopicsPage" element={<TopicsPage />} />
                    <Route path="/GalleryPage" element={<GalleryPage />} />
                    <Route path="/Order" element={<Order />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Jun Seo</p>
          </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;