
import './App.css';
import Footer from './components/footer/Footer';
import HamburgerMenu from './components/header/Header';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <HamburgerMenu></HamburgerMenu>
      <h1 className='title'>Hello To The Product Shop!!!</h1>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
