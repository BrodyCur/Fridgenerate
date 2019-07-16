import React from 'react';
import TEST from './RecipeTest';

const RecipeDetails = () => {
    const recipeDet = TEST.recipes.map((recipe) => {
    return (
    <section className="recipe-details">
        <div className="recipe-summary">
            <h1> {recipe.name}</h1>
            <img src={recipe.image} alt="" />
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
        </div>
    </section>
    );
});
    return (
        <div>
        {recipeDet}
        </div>    
    );
};


export default RecipeDetails;