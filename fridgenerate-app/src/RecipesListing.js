import React from 'react';
import axios from 'axios';
import TEST from './RecipeTest';
// import RecipeDetails from './RecipeDetails';
import { Link } from 'react-router-dom';

const RecipeListing = () => {
    
    const recipeList = TEST.recipes.map((recipe) => {

        const handleClick = (e) => {
            e.preventDefault();

            console.log(recipe)

            const url = "http://localhost:8000/recipe_details/"

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
            <section className="Recipe-listing">
                <div className="Recipe-title"><h2>{recipe.name}</h2></div>
                <Link to='/recipe-details'>
                <div className="Recipe-image"><img src={recipe.image} alt=""/></div>
                </Link>
                <button onClick={handleClick}>Details</button>
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