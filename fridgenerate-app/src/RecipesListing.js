import React from 'react';
import TEST from './RecipeTest'
import axios from 'axios';

const RecipeListing = () => {
    const recipeList = TEST.recipes.map((recipe) => {

        const handleClick = (e) => {
            e.preventDefault();

            const url = `http://localhost:8000/recipe_details/${recipe.id}/`

            axios.post(url, {
                'data': {'recipe_id': recipe.id}
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log("errors", e)
            })
        }

        return ( 
            <section onClick={handleClick} className="Recipe-listing">
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