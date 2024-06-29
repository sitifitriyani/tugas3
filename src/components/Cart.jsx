import { FaShoppingCart } from "react-icons/fa";

function Cart({ cartCount, toggleCart }) {
  return (
    <div className="cart-container">
      <button onClick={toggleCart}><FaShoppingCart /> {cartCount}</button>
    </div>
  );
}

export default Cart;

