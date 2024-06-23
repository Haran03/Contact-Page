
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      
        <div className="banner-container">
          <img src="contact1.jpg" className="banner"/>
        </div>
      <div className="container">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;