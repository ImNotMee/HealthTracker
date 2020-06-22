import React, { Component } from 'react';

import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    activeTab: this.props.children[0].props.label,
  };
  onClickTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTab,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <div className="tabList">
          {children.map((child) => {
            const { label } = child.props;
            return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTab} />;
          })}
        </div>
        <div className="tabContent">
          {children.map((child) => {
            if (child.props.label === activeTab) {
              return child.props.children;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
