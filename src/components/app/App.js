import React from 'react';
import AppHeader from '../AppHeader';
import ItemAddForm from '../itemAddForm';
import ItemStatusFilter from '../itemStatusFilter';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList/TodoList';

export default class App extends React.Component{  
    idn = 100;
    state = {
         todoData : [
             this.createTodoItem('Drink Coffee'),
             this.createTodoItem('Make Awesome App'),
             this.createTodoItem('Have a lunch'),
        ],
        term: '',
        filter: 'all'
    }

    toggleProperty( arr , id, propName){
        const idx = arr.findIndex( el => el.id === id)
        const oldItem = arr[idx]
        const newItem = { 
            ...oldItem, 
             [propName]: !oldItem[propName]
        }
        return [ 
            ...arr.slice( 0, idx),
            newItem ,
            ...arr.slice(idx +1)
        ]
    }
    createTodoItem(label){         
        return{ 
            id: this.idn++,
            label,
            done: false,
            important: false
        }
    }
    deleteItem = id => {
        this.setState(( {todoData}) =>{ 
           const idx = todoData.findIndex( el => el.id === id)
           const newArray = [ ...todoData.slice( 0, idx), ...todoData.slice(idx +1)]
           return{
               todoData : newArray
           }
        })
    }
    addItem = text => {
        const newItem = this.createTodoItem(text)
        this.setState(({ todoData }) => {
           const newArr = [
               ...todoData,
               newItem
           ]
           return{
                 todoData: newArr
            } 
        })
    }
    onToggleImportant = id =>{
        this.setState( ({todoData})=>{
            return{
                todoData: this.toggleProperty(todoData, id, "important")
            }
        })
    }
    onToggleDone = id => {
        this.setState( ({todoData})=>{
            return{
                todoData: this.toggleProperty(todoData, id, "done")
            }
        })
        
    }
    onSearchChenge = term =>{
        this.setState({term})
    }
    onFilterChenge = filter =>{
        this.setState({filter})
    }
    search(items, term){
        if(term.length === 0){
            return items
        }
        return items.filter( item => item.label
            .toLowerCase()
            .indexOf(term.toLowerCase()) > -1)
    }
    filter(items, filter){
        switch(filter){
            case 'all': 
                return items;
            case 'activ':
                return items.filter( item => !item.done);
            case 'done':
                return items.filter( item => item.done);
            default:
                return items
        }
    }
    render(){
        const {todoData , term, filter} = this.state
        const visibleItem = this.filter(this.search( todoData, term ) , filter) 
        const doneCount = todoData.filter( el => el.done).length 
        const todoCount = todoData.length - doneCount
         return(
            <div className="container">
                <AppHeader toDo={todoCount} done={doneCount}/> 
                <div className='d-flex w-100'>
                    <SearchPanel onSearchChenge={this.onSearchChenge}/>
                    <ItemStatusFilter  filter={filter} onFilterChenge={this.onFilterChenge}/>
                </div>
                
                <TodoList 
                    todos={visibleItem} 
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <ItemAddForm addItem={this.addItem} />
            </div>
        )
    }
}



