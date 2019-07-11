import React from 'react';
import TEST from './RecipeTest'

const RecipeListing = () => {
    const recipeList = TEST.recipes.map((recipe) => {
        return ( 
            <section className="Recipe-listing">
                <h2>{recipe.name}</h2>
                <img src={recipe.image} />
            </section>
        );
    });
    
    return (
    <div>
        <h1>Recipes</h1>
        {recipeList}
    </div>
            
    );
};
     
export default RecipeListing;