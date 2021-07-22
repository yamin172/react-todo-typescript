import React, { useState } from 'react';
import Todo from './Todo';

const Todos = () => {
    const [todo, setTodo] = useState("");
    
    const [todoList, setTodoList] = useState<string[]>([]);
    
    const onClick = () => {
        setTodoList([...todoList, todo])
        setTodo("")
    }
    return (
        <div>
            <h1 className="text-light m-4"> 📑 Todo List</h1>
            <div className="d-flex justify-content-center">
                <input
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                    name="name"
                    placeholder="✏ Type Here"
                    className="form-control w-100"
                />
                <button className="btn btn-danger" onClick={onClick}>Add</button>
            </div>
            {
                todoList.map((todo) => <Todo key={todo} data={todo}/>)
            }
            
        </div>
    );
};

export default Todos;