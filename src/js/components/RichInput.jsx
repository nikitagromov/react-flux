import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import Input from 'react-bootstrap/lib/Input';


export default React.createClass({
  getDefaultProps() {
    return {
      entity: {
        title: '',
        completed: false
      }
    };
  },

  getInitialState(){
    return {
      showInput: false,
      inputValue: this.props.entity.title
    }
  },

  handleClick() {
    this.setState({showInput: true});
  },

  handleKeyDown(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      ActionCreator.changeTaskTitle({id: this.props.entity.id, title: this.state.inputValue});
      this.setState({showInput: false, inputValue: ''});
    }
  },

  onChangeHandler(e) {
    this.setState({inputValue: e.target.value});
  },

  render() {
    let {entity} = this.props;
    if (this.state.showInput) {
      return (
        <Input type="text"
               autoFocus
               ref="text"
               value={this.state.inputValue}
               onChange={this.onChangeHandler}
               onKeyDown={this.handleKeyDown}/>
      );
    } else {
      return (
        <span onClick={this.handleClick}>{entity.title}</span>
      )
    }
  }
});

