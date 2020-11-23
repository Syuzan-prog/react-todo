import React from 'react';
import TodoListItem from '../todoListItem';


const TodoList = ({todos,onDeleted,onToggleImportant,onToggleDone}) =>{

    return(
        <ul className="list-group">
            {
               todos.map( (itam) => {
                    const {id , ...item} = itam
                    return(
                        <li key={id} className="list-group-item">
                            <TodoListItem  
                                {...item} 
                                onDeleted ={() => onDeleted(id)}
                                onToggleImportant={() => onToggleImportant(id)}
                                onToggleDone={() => onToggleDone(id)}
                                />
                         </li>
                   )
               }) 
            } 
        </ul>  
    )
}

export default TodoList;