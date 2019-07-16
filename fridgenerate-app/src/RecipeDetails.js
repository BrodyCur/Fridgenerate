import React from 'react';

const RecipeDetails = ({ currentRecipe }) => {
    return (
        <section className="recipe-details">
            <div className="recipe-summary">
                <div className="recipe-details-name"><h1>{currentRecipe.name}</h1></div>
                <div className="recipe-details-img"><img src={currentRecipe.image} alt={currentRecipe.name}/></div>
                <div className="recipe-details-org"><p>{currentRecipe.originalString}</p></div>
                <div className="recipe-details-inst"><p>{currentRecipe.instructions}</p></div>
            </div>
        </section>
    )
};


export default RecipeDetails;