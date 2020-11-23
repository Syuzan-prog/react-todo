
import React ,{Component} from 'react';

export default class ItemStatusFilter extends Component{
  buttons = [
    {name: 'all', label:'All'},
    {name: 'activ', label:'Activ'},
    {name: 'Done', label:'Done'},
  ]
    render(){
      const {filter, onFilterChenge } = this.props
      const buttons = this.buttons.map(({label, name}) =>{
          const isActiv = filter === name
          const clazz = isActiv ? "btn btn-info" : "btn btn-outline-secondary"
             return (
              <button 
                type="button" 
                className={clazz} 
                key={name}
                onClick={() =>onFilterChenge(name) }
                >
                  {label}
              </button>)
        })
          return(
            <div className="btn-group">
               {buttons}
          </div>
        )
    }
}
