import React, { Component } from "react";

export default class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state ={
            inputValue : ''
         } 
    }

    handleChange = (e) =>  {
         this.setState({
            inputValue :e.target.value 
         })
      
    }         
           
    render (){
         const { inputValue } = this.state;
         const { addItem } = this.props;

            return ( <form onSubmit={(e) => addItem (e, inputValue)}>
                        <input
                         //   ref={(a) => this._inputElement = a}
                            id ='inputForm'
                            placeholder="What needs to be done?"
                            onKeyPress={this.addItemEnter}
                            placeholder="enter task"
                            onChange={this.handleChange} 
                        >
                        </input>
                        <button type="submit">add</button>
                     </form>
            );
        } 
};
