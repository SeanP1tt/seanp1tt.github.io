import React, {Component} from 'react';
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
            {name: 'Recipe App', img: 'imgs/mealapp.png', description: 'Randomly generates a meal for your chosen meal of the day', link: 'https://meal-generator.herokuapp.com/', gh: 'https://github.com/SeanP1tt/meal-generator' },
            {name: 'To-do App', img: 'imgs/todo.png', description: 'A To-do list app w/ changeable themes', link: 'https://todo-sp.herokuapp.com/', gh:'https://github.com/SeanP1tt/Todo' },
            {name: 'Gregory', img: 'imgs/Gregory+Get+Started.png', description: 'A GRE test prep chatbot', link: 'https://www.gregory.education/'}
          ],
          navScrolled: false
    };
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll, true);
    // const width = document.getElementById('nav').clientWidth;
    // this.setState({navWidth: width});
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
