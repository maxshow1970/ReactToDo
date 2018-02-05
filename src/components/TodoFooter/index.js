import React, { Component } from "react";

class TodoFooter extends Component {
    constructor(props, context) {
        super(props, context);


    }

    render() {
        
        return(
               <div className="footer"> 
                    <span className = 'todo_count'>
                        <strong>{this.props.count}</strong> 
                    </span>
                    <ul className = 'filters'>
                       <li>
                           <a className = 'selected' onClick = { () => this.props.allViewItems()}>All</a>
                           <span> </span>
                       </li>
                       <li>
                           <a className = 'selected' onClick = { () => this.props.activeViewItems(false)}>Active</a>
                           <span> </span>
                       </li>
                       <li>
                           <a className = 'selected'  onClick = { () => this.props.activeViewItems(true)}>Completed</a>
                           <span> </span>
                       </li>

                    </ul>
                    <button className = 'clear-completed' onClick = { () => this.props.clearCompleted()}  > Clear completed </button>
                </div>
        );
 
    }      

};    

export default TodoFooter;