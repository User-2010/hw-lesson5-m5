import React from 'react';
import Category from './components/components/category/Category';
import Product from './components/components/productCard/Product';
import Last from './components/components/last/Last';

import { categoriesData } from './until/Category';
import { lastProductsData } from './until/Product';
import { lastRecipesData } from './until/Last';

function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

      <Category categories={categoriesData} />


      <Product items={lastProductsData} />


      <Last items={lastRecipesData} />
    </div>
  );
}

export default App;