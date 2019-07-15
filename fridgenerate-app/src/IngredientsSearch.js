import React, { useState } from 'react';
import ReactTags from 'react-tag-autocomplete';
import axios from 'axios';
import TEST from './RecipeTest';
import { Link } from 'react-router-dom';

const IngredientsSearch = () => {

    const [tags, setTags] = useState([]);
    const [recipeList, setRecipeList] = useState([])
    const [currentRecipe, setCurrentRecipe] = useState({})

    const handleDelete = (i) => {
        console.log("Handle delete:", i);
        let newTags = tags.slice(0);
        newTags.splice(i, 1);

        setTags( newTags );
    };

    const handleAddition = (tag) => {
        console.log("Addition:", tag);
        const newTags = [].concat(tags, tag);
        setTags( newTags );
    };

    const handleSuggestion = (() => {
        // Do an axios call to an endpoint that returns Ingredients matching sub-string
        const url = `http://localhost:8000/api/ingredients/`;
        axios.get(url)
        .then((response) => {
            setSuggestions(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    });

    
    const [suggestions, setSuggestions] = useState(handleSuggestion);

    const handleSubmit = (e) => {
        e.preventDefault()

        const url = "http://localhost:8000/recipes/";
        console.log("Tags:", tags)

        axios.post(url, {
            'data': {'ingredients': tags.map((tag) => tag.name).join(",")}
        })
        .then(response => {
            setRecipeList(response.data.recipes)
        })
        .catch(e => {
            console.log("errors:", e)
        });
    };


    const RecipeDetails = ({ currentRecipe }) => {
        return (
            <section className="recipe-details">
                <div className="recipe-summary">
                    <div className="recipe-details-name"><h1> {currentRecipe.name}</h1></div>
                    <div className="recipe-details-img"><img src={currentRecipe.image} /></div>
                    <div className="recipe-details-org"><p>{currentRecipe.originalString}</p></div>
                    <div className="recipe-details-inst"><p>{currentRecipe.instructions}</p></div>
                </div>
            </section>
        )
    };


    const RecipeResult = ({recipe}) => {

        const handleClick = (e) => {
            e.preventDefault();
    
            const url = "http://localhost:8000/recipe_details/"
    
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
        <section className="recipe-results">
            <ul>
                <li onClick={handleClick} key={recipe.id}>
                    <div className="recipe-result-name">{recipe.name}</div>
                    <div className="recipe-result-img"><img src={recipe.image} /></div>
                    {/* <div className="recipe-result-ready">{recipe.readyInMinutes}</div> */}
                    <div className="recipe-result-missing-ingredients">Missing ingredients: {recipe.missing_ingredients}</div>
                </li>
            </ul>
        </section>
        
        )
    }

    const Results = ({recipeList }) => {
        return (
            <ul>
                {
                    recipeList.map( (recipe) => {
                        return <RecipeResult key={recipe.id} recipe={recipe} />
                    })
                }
            </ul>
        ) 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ReactTags
                    tags={tags}
                    suggestions={suggestions}
                    handleSuggestion={handleSuggestion}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    placeholder="Add an ingredient..." 
                    maxSuggestionsLength={6} />
                <div className="btn">
                    <button className="Ingredients-button" type="submit"><span>I'm Feeling Hungry</span></button>
                </div>
            </form>

            <table className="table">
                <tr>
                    <td className="results">
                        <Results recipeList={recipeList} />
                    </td>
                    <td className="recipe">
                        <RecipeDetails currentRecipe={currentRecipe} />
                    </td>
                </tr>
            </table>
            
        </div>
    )
};




export default IngredientsSearch;
