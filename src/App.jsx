import Footer from "./components/Footer";
import Header from "./components/Header";
import ListProduct from "./components/ListProduct";
import CartModal from "./components/CartModal";

const App = () => {
  const [headerColor, setHeaderColor] = useState('#4CAF50');
  const [footerColor, setFooterColor] = useState('#2196F3');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleColorChange = (color) => {
    setHeaderColor(color);
    setFooterColor(color);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleLikeProduct = (liked) => {
    console.log("Product liked:", liked);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header color={headerColor} onColorChange={handleColorChange} cartCount={cart.length} toggleCart={toggleCart} />
      <div className="flex-1 p-4">
        <ListProduct onAddToCart={handleAddToCart} onLikeProduct={handleLikeProduct} />
      </div>
      <Footer color={footerColor} />
      {isCartOpen && <CartModal cart={cart} toggleCart={toggleCart} />}
    </div>
  );
}

export default App;
