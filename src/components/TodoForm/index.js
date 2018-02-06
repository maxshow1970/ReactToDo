import React, { Component } from "react";

export default class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state ={
            inputValue : '',
            errorExistence :false
         } 
    }
    
    handleChange = (e) =>  {

        let patt2 = /^\D/g;

        if (e.target.value !== '' && patt2.test(e.target.value[0]) && e.target.value.length < 15) {
            this.setState({
               inputValue :e.target.value,
               errorExistence : false
            })
        } else {
            this.setState({
                inputValue :e.target.value,
                errorExistence : true
            })
        }    
    }         

    renderError = () => {
        if (this.state.errorExistence){

            return <p>Error input </p>
        }
        else {return false }
    }
           
    render (){
         const { inputValue } = this.state;
         const { addItem } = this.props;

            return ( <div>
                      <form onSubmit={(e) => addItem (e, inputValue) }>
                        <input
                            id ='inputForm'
                            placeholder="What needs to be done?"
                            onKeyPress={this.addItemEnter}
                            onChange={this.handleChange} 
                        />
                  
                        <button type="submit">add</button>
                     </form>
                     {this.renderError()}
                   </div>  
            )
        } 
};
