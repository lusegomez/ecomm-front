// src/pages/CartPage.jsx
import React from "react";

export default function CartPage({ cartItems }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
