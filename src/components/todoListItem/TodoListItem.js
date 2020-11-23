import React from 'react';
import './TodoListItem.css'

export default class TodoListIem extends React.Component{

    render(){
        const {label , onDeleted, onToggleImportant, onToggleDone ,important,done } = this.props;
        let className
        if(done){
            className = ' done'
        }
        if(important){
            className += ' important'
        }
        return(
            <div className="todo d-flex justify-content-between"> 
            <span className={className}>
                <span onClick={ onToggleDone } >{label}</span>
            </span>
                <div>
                    <button type="button" className="btn btn-outline-danger" onClick = {onDeleted}>
                    <i className="fa fa-trash-o"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success pl-3 pr-3" onClick={ onToggleImportant}>
                        <i className="fa fa-exclamation" ></i>
                    </button>
                </div>
            </div> 
            )
        }
    }


