import React, { useRef, useState } from 'react';
import ReactTags from 'react-tag-autocomplete'



const IngredientsForm = ({onSubmit}) => {

    const ingredients = useRef();

    // const [searchResults, setSearchResults] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const query = String(ingredients.current.value)
        console.log("Query:", query)
        // onSubmit(s);

        // axios.get('whatever').then((data) => {
        // setSearchResults(data.results)
        // })
        // then -> 
        
    };

    return (
        <div className="Ingredients-form">
            <form onSubmit={handleSubmit}>
                <input id="Ingredients-input" ref={ingredients} placeholder="Add an ingredient..." type="text" autoFocus />
                <button id="Ingredients-button" type="submit">I'm Feeling Hungry</button>
            </form>
        </div>
        );
    };


export default IngredientsForm;