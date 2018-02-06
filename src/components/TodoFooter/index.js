import React  from "react";

export default function TodoFooter (props) {

// class TodoFooter extends Component {
//     constructor(props, context) {
//         super(props, context);


//     }

//     render() {
        
        return(
               <div className="footer"> 
                    <span className = 'todo_count'>
                        <strong>{props.count}</strong> 
                    </span>
                    <ul className = 'filters'>
                       <li>
                           <a className = 'selected' onClick = { () => props.allViewItems()}>All</a>
                           <span> </span>
                       </li>
                       <li>
                           <a className = 'selected' onClick = { () => props.activeViewItems(false)}>Active</a>
                           <span> </span>
                       </li>
                       <li>
                           <a className = 'selected'  onClick = { () => props.activeViewItems(true)}>Completed</a>
                           <span> </span>
                       </li>

                    </ul>
                    <button className = 'clear-completed' onClick = { () => props.clearCompleted()}  > Clear completed </button>
                </div>
        );
 
   // }      

};    

//export default TodoFooter;