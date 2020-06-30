import React, { Component } from 'react';

class Tab extends Component {
  constructor(props) {
    super(props);
  }
  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    let className = 'tabButton';
    if (this.props.activeTab === this.props.label) {
      className += ' active';
    }
    return (
      <button className={className} id={this.props.id} onClick={this.onClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Tab;
