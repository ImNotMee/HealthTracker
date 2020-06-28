import React, { Component } from 'react';
import './styles.css';
import Chart from 'chart.js';

class Graph extends Component {
  chartRef = React.createRef();
  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const graphRef = this.chartRef.current.getContext('2d');
    new Chart(graphRef, {
      type: this.props.type,
      data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wedsnesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: this.props.title,
            borderColor: '#dbedff',
            data: this.props.data,
            fill: false,
          },
        ],
      },
    });
  };

  render() {
    return (
      <div>
        <canvas id="graph" ref={this.chartRef} />
      </div>
    );
  }
}

export default Graph;
