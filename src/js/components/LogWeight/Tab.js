import React, { Component } from 'react';

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;
    let className = 'tabButton';
    if (activeTab === label) {
      className += ' active';
    }
    return (
      <button className={className} onClick={onClick}>
        {' '}
        {label}{' '}
      </button>
    );
  }
}

export default Tab;
