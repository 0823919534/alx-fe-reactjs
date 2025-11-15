import React from 'react';
import { useRecipeStore } from './store';

export default function RecipeList() {
    const recipes = useRecipeStore((state) => state.recipes);
    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>{recipe}</li>
                ))}
            </ul>
        </div>
    );
}
