import React, { Component } from 'react';
import './styles.css';
import Graph from './Graph/index.jsx';

class Trends extends Component {
  state = {
    user: this.props.activeUser,
    trends: {
      title: '',
      sleep: [],
      weight: [],
      calories: [],
      stress: [],
      type: 'line',
    },
  };

  renderGraph(type) {
    switch (type) {
      case 'weight':
        this.setState({
          trends: {
            title: 'Body Weight',
            data: this.state.user.trends.weight,
            type: 'line',
          },
        });
        break;
      case 'sleep':
        this.setState({
          trends: {
            title: 'Hours of Sleep',
            data: this.state.user.trends.sleep,
            type: 'bar',
          },
        });
        break;
      case 'calories':
        this.setState({
          trends: {
            title: 'Calorie Intake',
            data: this.state.user.trends.calories,
            type: 'bar',
          },
        });
        break;
      case 'stress':
        this.setState({
          trends: {
            title: 'Stress Level',
            data: this.state.user.trends.stress,
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
