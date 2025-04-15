import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  const handleAddToCart = (product, quantity) => {
    console.log(`Producto agregado: ${product.name}, cantidad: ${quantity}`);
  };

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
