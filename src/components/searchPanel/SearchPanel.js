import React from 'react';
import ItemStatusFilter from '../itemStatusFilter';



export default class SearchPanel extends React.Component {
    state={
        term: ''
    }
     onSearchChenge = e =>{
        const term = e.target.value
        this.setState({term})
        this.props. onSearchChenge(term)    
        
    }
    render(){
        const {term} = this.state
        return(
            <>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="type to search"
                    onChange={this.onSearchChenge}
                    value={term}
                    />
            </>
        )
    }
       
}

