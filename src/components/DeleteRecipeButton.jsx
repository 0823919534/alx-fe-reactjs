import React from 'react';
import { useRecipeStore } from '../recipeStore';

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)}>
      Delete Recipe
    </button>
  );
}
