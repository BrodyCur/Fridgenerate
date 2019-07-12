import React, { useState } from 'react';
import ReactTags from 'react-tag-autocomplete';
import axios from 'axios';
import TEST from './RecipeTest';

const IngredientsSearch = () => {

    const [tags, setTags] = useState([]);
    const [recipeList, setRecipeList] = useState([])

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
            console.log(recipeList);
        })
        .catch(e => {
            console.log("errors:", e)
        })
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

            <div id="matching_recipes">
                <ul>
                    {recipeList.map( (recipe) => {
                        return <li key={recipe.id}>{recipe.name}<img src={recipe.image} /></li>
                    }) }
                </ul>
            </div>
       </div>
    )
};


export default IngredientsSearch;
