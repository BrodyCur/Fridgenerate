import React from 'react';

const RecipeDetails = ({recipe}) => {
    const handleRecipeDetail = () => {
        console.log(`Showing details for ${recipe.name}`);
    };
    
  return (
      <section className = "Recipe" onClick={handleRecipeDetail}>
      </section>
     
  );
}

export default RecipeDetails;