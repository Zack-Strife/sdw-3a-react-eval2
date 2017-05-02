import React from 'react';

export default class users extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log('hey', props);
  }
  render() {
    return (
      <div>
	  	  {
	        this.props.users.map( item => (
	        <ul className="list">
	            <li> Name : {item.name}</li>
	            <li>Age : {item.age}</li>
	            <li>Type : {item.type}</li>
	        </ul>
	        ))
	      }
      </div>
    );
  }
}
