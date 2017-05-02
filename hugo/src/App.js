import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import Users from './components/users';
import Delete from './components/delete';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
      users: []
    };
  }

  componentDidMount() {
     fetch('https://kickass-sdw-3a.herokuapp.com/api/users/')
    .then(function(response) {
      return response.json()
    }).then((json) => {
      console.log(json);
      this.setState({
          users: json
        });
      console.log(this.state.users)
      }).catch(function(ex) {
        'Fail'
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <br/>
        <div>
          <h2>Afficher les users</h2>
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
