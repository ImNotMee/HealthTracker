import React, { Component } from 'react';
import './styles.css';
import Graph from './Graph/index.jsx';

class AdminTrends extends Component {
  state = {
    user: this.props.activeUser,
    avgData: [],
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
    fetch('https://csc309-2020-team27.herokuapp.com/trends/getAll', {
      method: 'POST',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ avgData: responseJson });
      });
  }

  renderGraph(type) {
    switch (type) {
      case 'weight':
        this.setState({
          trends: {
            title: 'Average Body Weight (lb)',
            data: this.state.avgData['weight'],
            type: 'line',
          },
        });
        break;
      case 'sleep':
        this.setState({
          trends: {
            title: 'Average Hours of Sleep',
            data: this.state.avgData['sleep'],
            type: 'bar',
          },
        });
        break;
      case 'calories':
        this.setState({
          trends: {
            title: 'Average Calorie Intake (cal)',
            data: this.state.avgData['calories'],
            type: 'bar',
          },
        });
        break;
      case 'stress':
        this.setState({
          trends: {
            title: 'Average Stress Level (1- 10)',
            data: this.state.avgData['stress'],
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

  // To render admin:
  // import AdminTrends from './adminTrend';
  // <AdminTrends activeUser={this.state.user} userDB={this.state.userDB} />

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

export default AdminTrends;
