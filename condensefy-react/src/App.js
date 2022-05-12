import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Overview from './components/overview/Overview';
import Products from './components/products/Products';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
