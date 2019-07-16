import React from 'react';
import axios from 'axios';

const SimilarRecipes = ( {similarRecipesList, setCurrentRecipe} ) => {
  return (
    <ul>
            {
                similarRecipesList.map( (recipe) => {

                    const handleClick = (e) => {
                        e.preventDefault();

                        const url = "http://localhost:8000/recipe_details/";

                        axios.post(url, {
                            'data': {
                                'recipe_id': recipe.id
                            }
                        })
                        .then(response => {
                            setCurrentRecipe(response.data)
                        })
                        .catch(e => {
                            console.log("errors", e)
                        })
                    }

                    return (
                        <div key={recipe.id} className='similar-recipe-info'>
                            <li onClick={handleClick}>
                                <div className="similar-recipe-result-name">{recipe.name}</div>
                                <div className="similar-recipe-result-img"><img src={recipe.image} alt={recipe.name}/></div>
                            </li>
                        </div>
                    )
                })
            }
        </ul>
  )
} 

export default SimilarRecipes;