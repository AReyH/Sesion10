import { useState } from "react";
import Todoform from "./Todoform";

function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });


    return todos.map((todo,index) => (
        <div className={todo.isComplete? 'todo-row complete': 'todo-row'} key={index}>
            <div key=>

            </div>
        </div>
    ))
};