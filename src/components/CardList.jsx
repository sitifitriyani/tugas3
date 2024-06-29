
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

export default function CardList({ product, onAddToCart, onLikeProduct }) {
    const [liked, setLiked] = useState(false);

  const handleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    onLikeProduct(newLikedState);
    alert(newLikedState ? 'Product liked' : 'Product unliked');
  };

  return (
    <div className="border p-4 m-2 w-64">
      <img
        src={product.image}
        alt={product.product}
        className="w-full h-50 object-cover"
      />
      <div className=" flex-col justify-items-center">

      <h2 className="text-xl font-bold">{product.product}</h2>
      <h5 className="justify-center ">{product.brand}</h5>
      <p className="">Rp.{product.harga}</p>
      </div>
      <div className="flex justify-evenly">
      <button onClick={handleLike} className="text-2xl">
        {liked ? <FcLike /> : <FcLikePlaceholder />}
      </button>
      <button onClick={onAddToCart} className="text-2xl">
        <FaCartPlus />
      </button>
      </div>
    </div>
  );
}
