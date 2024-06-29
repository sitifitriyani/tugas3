import React from "react";
import CardList from "./CardList";

export default function ListProduct({ onAddToCart, onLikeProduct }) {
  const products = [
    { id: 1, product: "Toner", brand: "Brand A", harga: 154799, image: "./toner.png" },
    { id: 2, product: "Sunscreen", brand: "Brand B", harga: 154799, image: "./Sunscreen.png" },
    { id: 3, product: "Sleeping Mask", brand: "Brand B", harga: 154799, image: "./sleeping mask.webp" },
    { id: 4, product: "Serum", brand: "Brand B", harga: 154799, image: "./serum.png" },
    { id: 5, product: "Micellar Water", brand: "Brand B", harga: 154799, image: "./Micellar_Water.png" },
    { id: 6, product: "Lipbalm", brand: "Brand B", harga: 154799, image: "./lipbalm.jpg" },
    { id: 7, product: "Facial Wash", brand: "Brand B", harga: 154799, image: "./Facial wash.jpeg" },
    { id: 8, product: "Eye Cream", brand: "Brand B", harga: 154799, image: "./eye cream.jpg" },
  ];

  return (
    <div className="flex flex-wrap justify-center p-4">
      {products.map((product) => (
        <CardList
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onLikeProduct={onLikeProduct}
        />
      ))}
    </div>
  );
}
