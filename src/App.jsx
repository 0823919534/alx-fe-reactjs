import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ maxWidth: 720, margin: '40px auto', padding: 20, fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Recipe Sharing App</h1>
        <p style={{ marginTop: 8, color: '#555' }}>
          Add and share simple recipes with Zustand state.
        </p>
      </header>

      <section style={{ marginBottom: 24 }}>
        <AddRecipeForm />
      </section>

      <section>
        <RecipeList />
      </section>
    </div>
  );
}

export default App;
