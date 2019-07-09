import React, { useRef } from 'react';

const IngredientsForm = ({onSubmit}) => {

    const ingredients = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const s = {
            ingredient: String(ingredients.current.value),
        };
        
        onSubmit(s);
    };

        return (
        <div className="Ingredients-form">
            <form onSubmit={handleSubmit}>
                <input id="Ingredients-input" ref={ingredients} placeholder="Add an ingredient..." type="text" autoFocus />
                <button>I'm Feeling Hungry</button>
            </form>
        </div>
        );
    };


export default IngredientsForm;