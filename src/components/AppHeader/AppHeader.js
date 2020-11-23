import React from 'react';

const AppHeader = ({toDo, done}) =>{
    return(
        <div className="d-flex justify-content-between">
            <h1>Todo List</h1>
            <h2 className="mt-2 text-secondary">{toDo}  more to do, done {done} </h2>
        </div>
    )
}
export default AppHeader;