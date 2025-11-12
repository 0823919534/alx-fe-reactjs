import React from 'react';
import { useRecipeStore } from '../stores/recipeStore'; // path must match

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes || recipes.length === 0) return <div>No recipes yet. Add one!</div>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: '1px solid #ddd', padding: 12, marginBottom: 8, borderRadius: 6 }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
