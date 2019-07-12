import React from 'react';
import TEST from './RecipeTest';

const RecipeDetails = (currentRecipe) => {
    return (
        <section className="recipe-details">
            <h1>HELLO</h1>
            <div className="recipe-summary">
                <h1> {currentRecipe.name}</h1>
                <img src={currentRecipe.image} />
                <p>{currentRecipe.ingredients}</p>
                <p>{currentRecipe.instructions}</p>
            </div>
        </section>
    )
};


export default RecipeDetails;