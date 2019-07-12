import React from 'react';
import TEST from './RecipeTest';
import RecipeDetails from './RecipeDetails';
import { Link } from 'react-router-dom';

const RecipeListing = () => {
    
    const recipeList = TEST.recipes.map((recipe) => {
        return (
            <section className="Recipe-listing">
                <div className="Recipe-title"><h2>{recipe.name}</h2></div>
                <Link to='/recipe-details'>
                <div className="Recipe-image"><img src={recipe.image} /></div>
                </Link>
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