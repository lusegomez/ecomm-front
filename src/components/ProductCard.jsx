import { useState } from "react";

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm mb-4 bg-white">
      {/* Contenedor izquierdo: imagen, título, descripción */}
      <div className="flex items-start gap-4 w-3/4">
        <img
          src={product.imageUrl || "https://via.placeholder.com/100"}
          alt={product.name}
          className="w-24 h-24 object-cover rounded"
        />
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="font-bold text-green-700">${product.price}</p>
        </div>
      </div>

      {/* Contenedor derecho: selector de cantidad y botón */}
      <div className="flex flex-col items-end gap-2 w-1/4">
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-16 border rounded px-2 py-1"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => onAddToCart(product, quantity)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
