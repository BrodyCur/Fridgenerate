import React, {useState} from 'react';
import axios from 'axios';


const RecipeResult = ({recipe}) => {

    const [currentRecipe, setCurrentRecipe] = useState({})


        const Results = ({recipeList }) => {
            return (
                <section className ="recipe-results">
                <ul>
                    {
                        recipeList.map( (recipe) => {
                            return <RecipeResult key={recipe.id} recipe={recipe} />
                        })
                    }
                </ul>
                <td id="results">
                    <Results recipeList={recipeList} />
                </td>
                </section>

            );
        };
    };

export default RecipeResult;