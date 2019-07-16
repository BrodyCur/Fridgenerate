import React, { useState } from 'react';
import axios from 'axios';
import SimilarRecipes from './SimilarRecipes'

const RecipeDetails = ({ currentRecipe, setCurrentRecipe }) => {

    const [similarRecipesList, setSimilarRecipesList] = useState([])

    const similarRecipesClick = () => {
        const url = 'http://localhost:8000/similar_recipes/';
    
        axios.post(url, {
            'data': {
                'recipe_id': currentRecipe.id
            }
        })
        .then((response) => {
            setSimilarRecipesList(response.data.recipes)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    function recipeDetails() {
        if (currentRecipe.id) {
            return (
                <div className="recipe-summary">
                    <div className="recipe-details-name"><h1> {currentRecipe.name}</h1></div>
                    <div className="recipe-details-img"><img src={currentRecipe.image} alt={currentRecipe.name}/></div>
                    <div className="recipe-details-org"><p>{currentRecipe.originalString}</p></div>
                    <div className="recipe-details-inst"><p>{currentRecipe.instructions}</p></div>
                    <button onClick={similarRecipesClick} type='button'>Click for Similar Recipes</button>
                    <SimilarRecipes similarRecipesList={similarRecipesList} setCurrentRecipe={setCurrentRecipe} />
                </div>
            )
        }
    }

    return (
        <section className="recipe-details">
            {recipeDetails()}
        </section>
    )
};


export default RecipeDetails;