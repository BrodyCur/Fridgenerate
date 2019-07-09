import React, { useRef } from 'react';

const RecipesForm = ({onSubmit}) => {

    const recipes = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const s = {
            recipe: String(recipes.current.value),
        };
        
        onSubmit(s);
    };

        return (
        <div className="Recipes-form">
            <form onSubmit={handleSubmit}>
                <input id="Recipes-input" ref={recipes} placeholder="Search recipes..." type="text" autoFocus />
            </form>
        </div>
        );
    };


export default RecipesForm;