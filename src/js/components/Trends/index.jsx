import React, { Component } from 'react';
import './styles.css';
import Graph from './Graph/index.jsx';

class Trends extends Component {
  state = {
    user: this.props.activeUser,
    trends: {
      title: '',
      data: [],
      type: 'line',
    },
  };

  renderGraph(type) {
    switch (type) {
      case 'weight':
        this.setState({
          trends: {
            title: 'Body Weight',
            data: [120, 119, 119, 120, 122, 119, 117],
            type: 'line',
          },
        });
        break;
      case 'sleep':
        this.setState({
          trends: {
            title: 'Hours of Sleep',
            data: [5, 6, 6, 7, 9, 10, 7],
            type: 'bar',
          },
        });
        break;
      case 'calories':
        this.setState({
          trends: {
            title: 'Calorie Intake',
            data: [1800, 1899, 2100, 2000, 1789, 1987, 1788],
            type: 'bar',
          },
        });
        break;
      case 'stress':
        this.setState({
          trends: {
            title: 'Stress Level',
            data: [2, 3, 2, 1, 4, 6, 5],
            type: 'line',
          },
        });
        break;
      default:
        this.setState({
          trends: {
            title: '',
            data: [],
            type: 'line',
          },
        });
        break;
    }
    console.log(this.state.trends);
  }

  render() {
    const { title, data, type } = this.state.trends;
    return (
      <div id="TrendsWrapper">
        <div id="trendsContainer">
          <button id="tabs" onClick={() => this.renderGraph('weight')}>
            Weight
          </button>
          <button id="tabs" onClick={() => this.renderGraph('sleep')}>
            Sleep
          </button>
          <button id="tabs" onClick={() => this.renderGraph('calories')}>
            Calories
          </button>
          <button id="tabs" onClick={() => this.renderGraph('stress')}>
            Stress
          </button>
        </div>
        <Graph data={data} title={title} type={type} />
      </div>
    );
  }
}

export default Trends;
