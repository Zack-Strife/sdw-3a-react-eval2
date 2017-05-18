import React from 'react';

export default class addUser extends React.Component {
  constructor(props) {
    super(props);
    this.nameChange = this.nameChange.bind(this);
	this.ageChange = this.ageChange.bind(this);
	this.typeChange = this.typeChange.bind(this);
	this.submitHandler = this.submitHandler.bind(this);
    this.state = {
  		name: '',
  		age: '',
  		type: ''
  	}
  }

  nameChange = (e) => {
    this.setState({name: e.target.value});
  }

  ageChange = (e) => {
    this.setState({age: e.target.value});
  }

  typeChange = (e) => {
    this.setState({type: e.target.value});
  }

  submitHandler = (e) => {
    e.preventDefault();
    fetch('https://kickass-sdw-3a.herokuapp.com/api/user', {
	    method: 'POST',
	    headers: {
	        'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({
	        age: this.state.age,
	        name: this.state.name,
	        type: this.state.type,
	    })
	}).then(() => (response) => {
		console.log(response); 
	});
  }

  render() {
    return (
    	<div className="form">
	      <form onSubmit={this.submitHandler} >
	      	<h2>Add an user</h2>
	      	<div lassName='form-group'>
	      	  <label htmlFor='name'>Name</label>
	      	  <input
	      	    id='name'
	      	    type='text'
	      	    value={this.state.name}
	      	    onChange={this.nameChange}
	      	    className="form-control"
	      	  />
	      	</div>
	      	<div lassName='form-group'>
	      	  <label htmlFor='age'>Age</label>
	      	  <input
	      	    id='age'
	      	    type='number'
	      	    value={this.state.age}
	      	    onChange={this.ageChange}
	      	    className="form-control"
	      	  />
	      	</div>
	      	<div lassName='form-group'>
	      	  <label htmlFor='type'>Type</label>
	      	  <input
	      	    id='type'
	      	    type='text'
	      	    value={this.state.type}
	      	    onChange={this.typeChange}
	      	    className="form-control"
	      	  />
	      	</div>
	      	<br/>
	      	<button type='submit' value='submit' className="btn btn-primary" >Submit </button>
	      </form>
      	</div>
    );
  }
}
