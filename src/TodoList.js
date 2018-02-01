import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
//import TodoForm from "./TodoForm";


class TodoList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: [],
            itemsFiltered: []
        };


        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        const { items: itemArray } = this.state;

            if (this._inputElement.value !== "") {

               let stateObj = {
                    text: this._inputElement.value,
                    key: Date.now(),
                    completed : false
                };

                this.setState({
                    items: [...itemArray,stateObj],
                    itemsFiltered: [...itemArray,stateObj]
                });

                this._inputElement.value = "";

            }

            e.preventDefault();
    }

    completed_task = key_id => {
        const { items } = this.state;
        var complete = items.map(item => {
            const { key } = item;
             
            if (key !== key_id) {
                return { ...item };
            } else {
                return { ...item, completed: !item.completed }
            }
        });
        
        this.setState({
            items: complete,
            itemsFiltered : complete
        })
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(item => item.key !== key);

        this.setState({
            items: filteredItems,
            itemsFiltered : filteredItems
        });
    }

    clearCompleted =() => {
	  	let filteredItems  = this.state.items.filter(todo => todo.completed===false);
         
        this.setState({
            items : filteredItems,
            itemsFiltered : filteredItems
        })    

    }
    

    allViewItems =() => {
        console.log('this.state.items', this.state.items);
          this.setState({
              items : this.state.items,
              itemsFiltered : this.state.items
          })
    }

    activeViewItems = (stateValue) => {
        console.log('this.state.items1', this.state.items);
        let filteredItems  = this.state.items.filter((itt) => {
            return itt.completed === stateValue
        });

        // debugger
        console.log('this.state.items2', this.state.items);

        this.setState({
            items : this.state.items,
            itemsFiltered : filteredItems
        })
 
    }

     render() {
        const ToDoItemsProps = {
            entries: this.state.itemsFiltered,
            delete: this.deleteItem,
            completedTask : this.completed_task, 
        }

        const TodoFooterProps = {
            clearCompleted : this.clearCompleted,
            allViewItems : this.allViewItems,
            activeViewItems : this.activeViewItems,
             count : this.state.items.length  
        }

        return (
            <div className="todoListMain">
                 <TodoHeader />
                
               <div className="header">  
                     <form onSubmit={this.addItem}>
                        <input
                            ref={(a) => this._inputElement = a}
                            onKeyPress={this.addItemEnter}
                            placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                     </form>
                   
                </div>
                <TodoItems
                    { ...ToDoItemsProps }
           
                />
                <TodoFooter 
                  { ...TodoFooterProps }
                /> 
                
            </div>
        );
    }
}

export default TodoList;import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
//import TodoForm from "./TodoForm";


class TodoList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: [],
            itemsFiltered: []
        };


        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        const { items: itemArray } = this.state;

            if (this._inputElement.value !== "") {

               let stateObj = {
                    text: this._inputElement.value,
                    key: Date.now(),
                    completed : false
                };

                this.setState({
                    items: [...itemArray,stateObj],
                    itemsFiltered: [...itemArray,stateObj]
                });

                this._inputElement.value = "";

            }

            e.preventDefault();
    }

    completed_task = key_id => {
        const { items } = this.state;
        var complete = items.map(item => {
            const { key } = item;
             
            if (key !== key_id) {
                return { ...item };
            } else {
                return { ...item, completed: !item.completed }
            }
        });
        
        this.setState({
            items: complete,
            itemsFiltered : complete
        })
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(item => item.key !== key);

        this.setState({
            items: filteredItems,
            itemsFiltered : filteredItems
        });
    }

    clearCompleted =() => {
	  	let filteredItems  = this.state.items.filter(todo => todo.completed===false);
         
        this.setState({
            items : filteredItems,
            itemsFiltered : filteredItems
        })    

    }
    

    allViewItems =() => {
        console.log('this.state.items', this.state.items);
          this.setState({
              items : this.state.items,
              itemsFiltered : this.state.items
          })
    }

    activeViewItems = (stateValue) => {
        console.log('this.state.items1', this.state.items);
        let filteredItems  = this.state.items.filter((itt) => {
            return itt.completed === stateValue
        });

        // debugger
        console.log('this.state.items2', this.state.items);

        this.setState({
            items : this.state.items,
            itemsFiltered : filteredItems
        })
 
    }

     render() {
        const ToDoItemsProps = {
            entries: this.state.itemsFiltered,
            delete: this.deleteItem,
            completedTask : this.completed_task, 
        }

        const TodoFooterProps = {
            clearCompleted : this.clearCompleted,
            allViewItems : this.allViewItems,
            activeViewItems : this.activeViewItems,
             count : this.state.items.length  
        }

        return (
            <div className="todoListMain">
                 <TodoHeader />
                
               <div className="header">  
                     <form onSubmit={this.addItem}>
                        <input
                            ref={(a) => this._inputElement = a}
                            onKeyPress={this.addItemEnter}
                            placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                     </form>
                   
                </div>
                <TodoItems
                    { ...ToDoItemsProps }
           
                />
                <TodoFooter 
                  { ...TodoFooterProps }
                /> 
                
            </div>
        );
    }
}

export default TodoList;