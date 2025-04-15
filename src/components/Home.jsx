import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 bg-pink-50">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-pink-700">Dulces Delicias</h1>
        <p className="text-gray-600 mt-2">¡Repostería artesanal con amor!</p>
      </div>

      <button
        onClick={() => navigate("/products")}
        className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-3 rounded-full shadow-lg transition"
      >
        Ver productos 🍬
      </button>
    </div>
  );
}
