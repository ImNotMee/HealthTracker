import React, { Component } from 'react';

class Tab extends Component {
  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    let className = 'tabButton';
    if (this.props.activeTab === this.props.label) {
      className += ' active';
    }
    return (
      <button className={className} onClick={this.onClick}>
        {this.props.label}
      </button>
    );
  }
}

export default Tab;
