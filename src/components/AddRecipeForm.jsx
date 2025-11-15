import React from 'react';
import { useRecipeStore } from '../recipeStore';

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type='text' placeholder='Recipe name' />
      <button type='submit'>Add</button>
    </form>
  );
}
