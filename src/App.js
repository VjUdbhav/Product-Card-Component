import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ProductCard
        name="Wireless Mouse"
        price={799}
        image="https://via.placeholder.com/250"
        inStock={true}
      />

      <ProductCard
        name="Keyboard"
        price={1999}
        image="https://via.placeholder.com/250"
        inStock={false}
      />
    </div>
  );
}

export default App;
