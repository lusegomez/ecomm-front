export default function CategoryFilter({ categories, selectedCategory, onSelect }) {
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        <h1>Categorias</h1>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`px-4 py-1 rounded-full border ${
              selectedCategory === cat.id ? "bg-pink-600 text-white" : "bg-white text-pink-600"
            }`}
          >
            {cat.name}
          </button>
          
        ))}
        <button
          onClick={() => onSelect(null)}
          className={`px-4 py-1 rounded-full border ${
            selectedCategory === null ? "bg-pink-600 text-white" : "bg-white text-pink-600"
          }`}
        >
          Todos
        </button>
      </div>
    );
  }
  