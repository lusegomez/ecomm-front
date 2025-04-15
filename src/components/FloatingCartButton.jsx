import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FloatingCartButton({ itemCount }) {
  return (
    <Link
      to="/cart"
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 flex items-center justify-center"
    >
      <FaShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
