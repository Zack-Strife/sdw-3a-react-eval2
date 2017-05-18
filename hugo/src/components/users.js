import React from 'react';

export default class users extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    return (
      <div className="data-panel">
	  	  {
	        this.props.users.map( item => (
	        <ul className="list-group">
	            <li className="list-group-item"> Name : {item.name}</li>
	            <li className="list-group-item">Age : {item.age}</li>
	            <li className="list-group-item">Type : {item.type}</li>
	        </ul>
	        ))
	      }
      </div>
    );
  }
}
