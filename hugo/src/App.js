import React, { Component } from 'react';
import logo from './shirobako.gif';
import './App.css';
import 'whatwg-fetch';
import Users from './components/users';
import Projects from './components/projects';
import AddUser from './components/addUser';
import AddProject from './components/addProject';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
      users: [],
      projects: []
    };
  }

  componentDidMount() {
     fetch('https://kickass-sdw-3a.herokuapp.com/api/users/')
    .then(function(response) {
      return response.json()
    }).then((json) => {
      this.setState({
          users: json
        });
      }).catch(function(ex) {
        'Fail'
      })

      fetch('https://kickass-sdw-3a.herokuapp.com/api/projects/')
    .then(function(response) {
      return response.json()
    }).then((json) => {
      this.setState({
          projects: json
        });
      console.log(json)
      }).catch(function(ex) {
        'Fail'
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my app</h2>
        </div>
        <br/>
        <div>
          <AddUser/>
          <AddProject/>
          <h2>Show users</h2>
          <Users users={this.state.users}/>
          <h2>Show projects</h2>
          <Projects projects={this.state.projects}/>
        </div>
         
      </div>
    );
  }
}

export default App;
