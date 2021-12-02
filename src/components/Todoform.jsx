import React, { useState } from "react";

function Todoform(props) {

    const [input, setInput] = useState('');

    // This function changes the input from empty to whatever the user typed
    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input

        });
       // This erases the input after submitted
        setInput('')
    };

    return (
        <>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input 
                type='text' 
                placeholder='Add a ToDo' 
                value={input} 
                name='text'
                className='todo-input'
                onChange={handleChange}
                ></input>
                <button className='todo-button'>Add ToDo</button>
            </form>
        </>
    );
};

export default Todoform;