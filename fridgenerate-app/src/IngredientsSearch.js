import React, { useState } from 'react';
import ReactTags from 'react-tag-autocomplete';
import axios from 'axios';
import qs from 'qs';

const IngredientsSearch = () => {
    
    const initialTags = [
        {id: 1, name: "Apples"},
        {id: 2, name: "Bananas"},
        {id: 3, name: "Eggs"},
    ]
    
    const initialSuggestions = [
        {id:4, name: "Bacon"},
        {id:5, name: "Chicken"},
        {id:6, name: "Lemons"},
        {id:7, name: "Butter"},
        {id:8, name: "Milk"},
    ]
    
    const [tags, setTags] = useState(initialTags)
    const [suggestions, setSuggestions] = useState(initialSuggestions)

    const handleDelete = (i) => {
        console.log("Handle delete:", i)
        let newTags = tags.slice(0)
        newTags.splice(i, 1)
        setTags( newTags )
    }

    const handleAddition = (tag) => {
        console.log("Addition:", tag)

        const newTags = [].concat(tags, tag)
        setTags( newTags )
    }

    const handleSuggestion = (tag) => {
        // Do an axios call to an endpoint that returns Ingredients matching sub-string
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        const url = "http://localhost:8000/recipes/";

        console.log("Tags:", tags)
        
        axios.post(url, {
            'data': {'ingredients': tags.map((tag) => tag.name).join(",")}
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(e => {
            console.log("errors:", e)
        })

        // axios.get(url)
        // .then(response => {
        //     console.log(response.data)
        // })
        // .catch(e => {
        //     console.log("errors:", e)
        // })
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ReactTags
                    tags={tags}
                    suggestions={suggestions}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    placeholder="Add an ingredient..." />
                    <div className="btn">
                        <button className="Ingredients-button" type="submit"><span>I'm Feeling Hungry</span></button>
                    </div>
            </form>
        </div>

    )
}


export default IngredientsSearch;
