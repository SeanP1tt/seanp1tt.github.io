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
import Experience from './components/Experience'
import Contact from './components/Contact'
import Projects from './components/Projects'


let lastScrollY = 0;


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
            {name: 'Meal Generator App', img: 'imgs/mealapp.png', description: 'A random meal generator app to help decide what to cook', link: 'https://meal-generator.herokuapp.com/' },
            {name: 'Todo App', img: 'imgs/todo.png', description: 'A Todo app that I created', link: 'https://todo-sp.herokuapp.com/' },
            {name: 'Gregory', img: 'imgs/Gregory+Get+Started.png', description: 'A GRE test prep chatbot', link: 'https://www.gregory.education/' }
          ],
          navScrolled: false
    };
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll, true);
    // const height = document.getElementById('nav').clientHeight;
    // this.setState(navHeight, height);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll(){
    lastScrollY = window.scrollY;
    if(lastScrollY > this.state.navHeight){
      this.setState(navScrolled, true)
    } else {
      this.setState(navScrolled, false)
    }
  };

render(){
  return (

    <div className="App">
      <Nav/>
      <Home/>
      <Experience/>
      <Projects projects={this.state.projects}/>
      <Contact/>
    </div>
 
  );
}

}

export default App;
