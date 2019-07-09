import React, { useRef } from 'react';

const Form = ({onSubmit}) => {

    const ingredients = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const s = {
            ingredient: String(ingredients.current.value),
        };
        
        onSubmit(s);
    };

        return (
            <form onSubmit={handleSubmit}>
                <input ref={ingredients} placeholder="Add an ingredient..." type="text" />
                <button>I'm Feeling Hungry</button>
            </form>
        );
    };


export default Form;