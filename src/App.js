import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { Search } from './components/search/search-component.jsx';

class App extends Component{
  constructor(){
    super();
    this.state = {
      users : [],
      filterText : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data =>  data.json())
    .then(users =>  {
      this.setState({users : users});
      console.log(users);
    })
  }

  filterRobots = (event) => {
      this.setState({filterText : event.target.value});
  }

  render(){
    const seacrhField = this.state.filterText;
    const monsters = this.state.users.filter(monster => monster.name.toLowerCase().includes(seacrhField.toLowerCase()));
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <input type = 'text' onChange = {this.filterRobots}/>
        <CardList monsters = {monsters }></CardList>
        
      </div>
    )
  }
}

export default App;
