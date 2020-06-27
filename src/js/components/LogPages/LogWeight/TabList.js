import React, { Component } from 'react';

import Tab from './Tab';

class TabList extends Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };

  onClickTab = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };

  render() {
    return (
      <div className="tabList">
        <div className="tab">
          {this.props.children.map((child) => {
            return (
              <Tab
                activeTab={this.state.activeTab}
                key={child.props.label}
                label={child.props.label}
                onClick={this.onClickTab}
              />
            );
          })}
        </div>
        <div className="tabContent">
          {this.props.children.map((child) => {
            if (child.props.label === this.state.activeTab) {
              return child.props.children;
            } else {
              return undefined;
            }
          })}
        </div>
      </div>
    );
  }
}

export default TabList;
