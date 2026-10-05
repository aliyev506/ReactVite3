import ProductCard from "./components/ProductCard";
import products from "./data/products";

function App() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default App;
