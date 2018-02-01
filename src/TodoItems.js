import React, { Component } from "react";
import "./TodoList.css";


class TodoItems extends Component {
    constructor(props, context) {
        super(props, context);


        this.createTasks = this.createTasks.bind(this);
    }


   

    createTasks(item) {
         return (
                <li className = 'completed' key={ item.key } >    
                      <div className = 'view' >
                         <input className = 'toggle' 
                              checked = { item.completed }   
                              onChange={ () => this.props.completedTask(item.key)}  
                              type = 'checkbox' />
                         <label> {item.text} </label> 
                         <button className = "destroy" onClick={() => this.delete(item.key)} > X </button>  
                      </div>  
                </li>
                );
    };

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);
 
        return ( <ul className = "theList" >
                    { listItems }
                </ul>
        );
    }
};

export default TodoItems;