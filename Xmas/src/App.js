import React, {Component} from 'react';
import './App.scss';
import Login from './components/Login.js';
import Welcome from './components/Welcome.js';
import Guidelines from './components/Guidelines.js';
import Form from './components/Form.js';
import Finish from './components/Finish.js';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

/**
Christmas Project to push me to take on greater challenges
Web App must store responses - Add calendar event

Must Change View based on who visits the page
Add form Validation
Add date checking to conditionally style login page

Add timeout for page transition effects
see if routing works with hooks

Create page to route users to if they're not on the list
Add animation to site for page transitions
**/



class Xmas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      approved: false,
      submitted: false
    };
  }
  setName = (event) => {
    this.setState({name:event.target.value})
  }
  setApproval = (v) => {
    this.setState({approved: v})
  }
  setSubmission = (v) => {
    this.setState({submitted: v})
  }

render(){
  return (
<BrowserRouter>
    <div className="App">

      <Switch>

      <Route exact path="/">
      <Login onKeyUp={this.setName} name={this.state.name} setApproval={this.setApproval} setSubmission={this.setSubmission} approved={this.state.approved} submitted={this.state.submitted}/>
      </Route>

      <Route exact path="/welcome">
      <Welcome name={this.state.name}/>
      </Route>

      <Route exact path="/guidelines">
      <Guidelines/>
      </Route>

      <Route path="/form">
      <Form user={this.state.name}/>
      </Route>

      <Route path="/finish">
      <Finish/>
      </Route>

      </Switch>

    </div>
  </BrowserRouter>
  );
}

}

export default Xmas;
