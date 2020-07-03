'use strict';
import React, { Component } from 'react';
import Chart from 'chart.js';

class PieChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const pieChartRef = this.chartRef.current.getContext('2d');
    new Chart(pieChartRef, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Remaining'],
        datasets: [
          {
            backgroundColor: ['#2980b9', '#dbedff'],
            data: this.props.data,
          },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        <canvas id="pieChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default PieChart;
