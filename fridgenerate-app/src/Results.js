import React from 'react';

import axios from 'axios';

const Results = ( {recipe, recipeList, setCurrentRecipe} ) => {

  
    return (
        <ul>
            {
                recipeList.map( (recipe) => {
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
                        <div className='recipe-info'>
                            <li key={recipe.id} onClick={handleClick}>
                                <div className="recipe-result-name">{recipe.name}</div>
                                <div className="recipe-result-img"><img src={recipe.image} alt={recipe.name}/></div>
                                {/* <div className="recipe-result-ready">{recipe.readyInMinutes}</div> */}
                                <div className="recipe-result-missing-ingredients">Missing ingredients: {recipe.missing_ingredients}</div>
                            </li>
                        </div>
                    )
                })
            }
        </ul>
    ) 
}

export default Results;