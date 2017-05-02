import React, { PropTypes, Component } from 'react';

export default class Delete extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div>
        <h1>
          Delete an user or a project
        </h1>
      </div>
    );
  }
}