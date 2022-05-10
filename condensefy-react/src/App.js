import './App.css';
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
    </div>
  );
}

export default App;
