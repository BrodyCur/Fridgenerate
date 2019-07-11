import React from 'react';


const RecipeDetails = ({recipe}) => {
    
    const handleClick = (recipe) => {
        console.log('recipe', recipe)
    }
    return (
        <section className="recipe-details" onClick={() => console.log(`Show details for ${recipe.name}`)}>
            <div className="recipe-summary">
                <h1>You made it!</h1>
                {/* <h1> {recipe.name}</h1>
                <img src={recipe.image} />
                <p>{recipe.ingredients}</p>
                <p>{recipe.instructions}</p> */}
            </div>
        </section>
    )
}

export default RecipeDetails;