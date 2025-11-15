import React, { useState } from 'react';
import { useRecipeStore } from './store';

function AddRecipeForm() {
  const [name, setName] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addRecipe({ name });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Recipe name'
      />
      <button type='submit'>Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
