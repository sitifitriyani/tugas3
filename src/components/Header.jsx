import ColorPicker from './ColorPicker';
import Cart from './Cart';

const Header = ({ color, onColorChange, cartCount, toggleCart }) => {
  return (
    <header className="w-full p-4 flex justify-between items-center" style={{ backgroundColor: color }}>
      <h1>Beauty Store</h1>
      <Cart cartCount={cartCount} toggleCart={toggleCart} />
      <ColorPicker onColorChange={onColorChange} />
    </header>
  );
}

export default Header;
