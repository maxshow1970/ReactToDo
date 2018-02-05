import React, { Component } from "react";
import ReactDom from 'react-dom';

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

export default class TodoTextInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      text: props.initialValue || ''
    }
  }

  static defaultProps = {
    commitOnBlur: false
  }

  componentDidMount() {
    ReactDom.findDOMNode(this).focus();
  }

  handleBlur = () => {
    if (this.props.saveOnBlur) {
       this.save();
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleKeyDown = (e) => {
  if (this.props.onCancel && e.keyCode === ESC_KEY_CODE) {
      this.props.onCancel();
    } else if (e.keyCode === ENTER_KEY_CODE) {
      this.save();
    }
  }

  save() {
    const text = this.state.text.trim();
    let patt2 = /^\D/g;
    if (text !== '' && patt2.test(text[0]) && text.length < 15) 
    {
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <input className={this.props.className || ''}
             placeholder={this.state.text}
             value={this.state.text}
             onBlur={this.handleBlur}
             onChange={this.handleChange}
             onKeyDown={this.handleKeyDown} />
    );
  }
}
