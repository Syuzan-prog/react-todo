import React from 'react';

export default class ItemAddForm extends React.Component{
    state={
        label:""
    }
    onLabelChenge = (e) =>{
       this.setState({
           label: e.target.value
       })
    }
    onSubmit = e => {
        e.preventDefault()
        this.props.addItem(this.state.label)
        this.setState({
            label:""
        })
    }
    render(){
        return(
            <form className="d-flex mt-3" onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className="form-control mr-2"
                    onChange={this.onLabelChenge}
                    placeholder="What needs to be done"
                    value={this.state.label}
                />
                 <button 
                    type="button" 
                    className="btn btn btn-outline-secondary "
                    >   
                    Add_Item
                </button>
            </form>
           
        )
    }
}