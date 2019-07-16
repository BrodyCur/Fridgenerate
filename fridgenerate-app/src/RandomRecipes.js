import React from 'react';


const RandomRecipes = ( {randomHandler} ) => {
        return (
        <div className="Recipes-form">
            <button onClick={randomHandler} className="Ingredients-button" type='button'>Get Random Recipes!</button>
        </div>
        );
    };


export default RandomRecipes;