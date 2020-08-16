import React, { Component } from 'react';
import './styles.css';
import Graph from './Graph/index.jsx';

class Trends extends Component {
  state = {
    user: this.props.activeUser,
    sleep: [],
    weight: [],
    calories: [],
    stress: [],
    trends: {
      title: '',
      data: [],
      type: 'line',
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://csc309-2020-team27.herokuapp.com/weight', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const data = this.dateProcessor(responseJson);
        this.setState({ weight: data });
      });
    fetch('https://csc309-2020-team27.herokuapp.com/sleep', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const data = this.dateProcessor(responseJson);
        this.setState({ sleep: data });
      });
    fetch('https://csc309-2020-team27.herokuapp.com/stress', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const data = this.dateProcessor(responseJson);
        this.setState({ stress: data });
      });
    fetch('https://csc309-2020-team27.herokuapp.com/trends/calories', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const data = this.dateProcessor(responseJson);
        this.setState({ calories: data });
      });
  }

  dateProcessor(list) {
    const a = [0, 0, 0, 0, 0, 0, 0];
    list.forEach((item) => {
      let d = new Date(item.date).getDay();
      a[d] = item.value;
    });
    return a;
  }

  renderGraph(type) {
    switch (type) {
      case 'weight':
        this.setState({
          trends: {
            title: 'Body Weight (lb)',
            data: this.state.weight,
            type: 'line',
          },
        });
        break;
      case 'sleep':
        this.setState({
          trends: {
            title: 'Hours of Sleep',
            data: this.state.sleep,
            type: 'bar',
          },
        });
        break;
      case 'calories':
        this.setState({
          trends: {
            title: 'Calorie Intake (cal)',
            data: this.state.calories,
            type: 'bar',
          },
        });
        break;
      case 'stress':
        this.setState({
          trends: {
            title: 'Stress Level (1- 10)',
            data: this.state.stress,
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
