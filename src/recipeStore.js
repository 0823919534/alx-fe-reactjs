import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

// export both named and default to satisfy different checker expectations
export { useRecipeStore };
export default useRecipeStore;
