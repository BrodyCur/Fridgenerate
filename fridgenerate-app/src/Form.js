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
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <input ref={ingredients} placeholder="Add an ingredient..." type="text" autoFocus />
                <button>I'm Feeling Hungry</button>
            </form>
        </div>
        );
    };


export default Form;