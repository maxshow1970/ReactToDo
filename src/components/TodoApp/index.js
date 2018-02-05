import React, { Component } from "react";
import TodoList from "../TodoList";
import "./style.css";
import TodoForm from "../TodoForm";
import TodoHeader from "../TodoHeader";
import TodoFooter from "../TodoFooter";

export default class TodoApp extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: [],
            itemsFiltered: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e, value) {
        let patt2 = /^\D/g;

        e.preventDefault();

        const { items: itemArray } = this.state;
        
            if (value !== "" && patt2.test( value[0]) && value.length < 15) {

               let stateObj = {
                    text: value,
                    key: Date.now(),
                    completed : false
                };

                this.setState({
                    items: [...itemArray,stateObj],
                    itemsFiltered: [...itemArray,stateObj]
                });

                document.getElementById("inputForm").value = '';
            }  else  {
                alert('Error');
            }     
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
              itemsFiltered : this.state.items
          })
    }

    activeViewItems = (stateValue) => {
        console.log('this.state.items1', this.state.items);
        let filteredItems  = this.state.items.filter((itt) => {
            return itt.completed === stateValue
        });

        this.setState({
            itemsFiltered : filteredItems
        })
    }

    editItem = (textIn,key) => {
        this.setState(prevState=>({
            items : prevState.items.map((value) =>{
                if (value.key === key) value.text = textIn;
                return value;
            }),  
            itemsFiltered : prevState.itemsFiltered.map((value) =>{
                if (value.key === key) value.text = textIn;
                return value;
            })    
        }))

    }

     render() {
        const ToDoListProps = {
            entries: this.state.itemsFiltered,
            state : this.state.items,
            delete: this.deleteItem,
            completedTask : this.completed_task, 
            editItem : this.editItem
        }

        const TodoFooterProps = {
            clearCompleted : this.clearCompleted,
            allViewItems : this.allViewItems,
            activeViewItems : this.activeViewItems,
             count : this.state.items.length  
        }

        const TodoFormProps = {
            textInput : this.state.items.text,
            addItem : this.addItem

        }

        return (
            <div className="todoListMain">
                 <TodoHeader />
                
               <div className="main">  
                    <TodoForm
                      {...TodoFormProps}
                    /> 
                </div>
                <TodoList
                    { ...ToDoListProps }
                />
                <TodoFooter 
                  { ...TodoFooterProps }
                /> 
                
            </div>
        );
    }
}
