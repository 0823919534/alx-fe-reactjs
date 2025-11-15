import React, { useState } from 'react';
import { useRecipeStore } from './store';

export default function AddRecipeForm() {
    const [recipe, setRecipe] = useState('');
    const addRecipe = useRecipeStore((state) => state.addRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(recipe) {
            addRecipe(recipe);
            setRecipe('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
                placeholder='Enter recipe'
            />
            <button type='submit'>Add Recipe</button>
        </form>
    );
}
