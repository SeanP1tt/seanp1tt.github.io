import React from 'react';
import {Button} from './Welcome.js';
import firebase from './firebase.js';
import {Redirect} from "react-router-dom";



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favor: '',
    description:'',
  user: props.user,
submitted: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const itemsRef = firebase.database().ref('favors');
  const item = {
    user: this.state.user,
    favor: this.state.favor,
    description: this.state.description
  }
  itemsRef.push(item);
  this.setState({submitted: true})
  }
  render (){
    return this.state.submitted? <Redirect to='/finish' /> :
    (

    <div className="Form">
      <div className="Form_container">
    <form onSubmit={this.handleSubmit}>
    <label> Favor: </label>
    <input type="text" name="favor" onChange={this.handleChange} value={this.state.favor} required/>
    <label> Description: </label>
    <input type="text" name="description" onChange={this.handleChange} value={this.state.description} required/>
    <Button type="submit" value="Submit">Submit</Button>
    </form>
    </div>
    </div>
  );
}
}

export default Form;
