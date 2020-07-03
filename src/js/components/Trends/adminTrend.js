import React, { Component } from 'react';
import './styles.css';
import Graph from './Graph/index.jsx';
import { avgStress, avgCalories, avgSleep, avgWeight } from '../../actions/trends';

class AdminTrends extends Component {
  state = {
    user: this.props.activeUser,
    userDB: this.props.userDB,
    trends: {
      title: '',
      data: [],
      type: 'line',
    },
  };

  renderGraph(type) {
    let avg = [];
    switch (type) {
      case 'weight':
        avg = avgWeight(this.state.userDB);
        this.setState({
          trends: {
            title: 'Average Body Weight',
            data: avg,
            type: 'line',
          },
        });
        break;
      case 'sleep':
        avg = avgSleep(this.state.userDB);
        this.setState({
          trends: {
            title: 'Average Hours of Sleep',
            data: avg,
            type: 'bar',
          },
        });
        break;
      case 'calories':
        avg = avgCalories(this.state.userDB);
        this.setState({
          trends: {
            title: 'Average Calorie Intake',
            data: avg,
            type: 'bar',
          },
        });
        break;
      case 'stress':
        avg = avgStress(this.state.userDB);
        this.setState({
          trends: {
            title: 'Average Stress Level',
            data: avg,
            type: 'line',
          },
        });
        break;
      default:
        this.setState({
          trends: {
            title: '',
            data: avg,
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
