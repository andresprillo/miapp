import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Card6 from './components/Card6';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="container-flex">
      <Card1 />
      <Card2 />
      <Card3 />
      </div>
      <div className="container-flex">
      <Card4 />
      <Card5 />
      <Card6 />
      </div>
      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;
