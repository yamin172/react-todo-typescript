import React from 'react';

interface Iprops {
    data: string
}
const Todo = ( { data } : Iprops) => {
    return (
        <div className=" m-4">
            <p className="text-dark bg-light rounded">
                {data}
            </p>
        </div>
    );
};

export default Todo;