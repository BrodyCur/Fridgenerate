// import React, {useState} from 'react';
// import axios from 'axios';


// const RecipeResult = ({recipeList, recipe, setCurrentRecipe}) => {

//     const handleClick = (e) => {
//         e.preventDefault();

//         const url = "http://localhost:8000/recipe_details/"

//         axios.post(url, {
//             'data': {
//                 'recipe_id': recipe.id
//             }
//         })
//         .then(response => {
//             setCurrentRecipe(response.data)
//         })
//         .catch(e => {
//             console.log("errors", e)
//         })
//     }

//     return (
//             <li onClick={handleClick}>
//                 <div className="recipe-result-name">{recipe.name}</div>
//                 <div className="recipe-result-img"><img src={recipe.image} /></div>
//                 {/* <div className="recipe-result-ready">{recipe.readyInMinutes}</div> */}
//                 <div className="recipe-result-missing-ingredients">Missing ingredients: {recipe.missing_ingredients}</div>
//             </li>
//     )
// }

// export default RecipeResult;