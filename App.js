import React, {Component} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Projects from './components/Projects'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {name: 'HTML5', value: 90, id: 'color1'},
        {name: 'CSS3', value: 90, id: 'color2'},
         {name: 'Javascript', value: 80, id: 'color3'},
         {name: 'Sql', value: 70, id: 'color4'},
          {name:'Python', value: 75, id: 'color5'}
        ],
        projects: [
            {name: 'Weather App', img: '#', description: 'A weather app that I created', link: '#' },
            {name: 'Water App', img: '#', description: 'A water app that I created', link: '#' },
            {name: 'Todo App', img: '#', description: 'A Todo app that I created', link: '#' },
            {name: 'Meal Generator App', img: '#', description: 'A Meal Generator app that I created', link: '#' }
          ]
    };
  }

render(){
  return (
<BrowserRouter>
    <div className="App">
      <Switch>

      <Route exact path="/">
      <Home/>
      <Skills skillSet={this.state.skills}/>
      <Experience/>
      <Projects projects={this.state.projects}/>
      <Contact/>
      </Route>

      <Route exact path="/welcome">

      </Route>

      <Route exact path="/guidelines">

      </Route>

      <Route path="/form">

      </Route>

      </Switch>
    </div>
  </BrowserRouter>
  );
}

}

export default App;
