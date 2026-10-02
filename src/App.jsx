import { ProductCard } from './components/productCard/ProductCard';
import { recipesList } from './until/Until';
import './App.css';

function App() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>Simple and tasty recipes</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
        {recipesList.map((recipe) => (
          <ProductCard key={recipe.id} product={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;