import { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import Cart from "./Cart";

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredCategoryId, setFilteredCategoryId] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false); // Estado para controlar la visibilidad del carrito

  useEffect(() => {
    fetch("http://localhost:8080/api/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("Categorías recibidas:", data);
        setCategories(data);
      });

    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const filteredProducts = filteredCategoryId
    ? products.filter((p) => p.category.id === filteredCategoryId)
    : products;

  const handleAddToCart = (product, quantity) => {
    const newCart = [...cart];
    const existingProduct = newCart.find((item) => item.product.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      newCart.push({ product, quantity });
    }

    setCart(newCart);
  };

  const handleToggleCart = () => {
    setIsCartVisible(!isCartVisible); 
  };

  return (
    <div className="p-4">
      <CategoryFilter
        categories={categories}
        selectedCategory={filteredCategoryId}
        onSelect={setFilteredCategoryId}
      />
      <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
      
      {isCartVisible && <Cart cart={cart} />}
    </div>
  );
}
