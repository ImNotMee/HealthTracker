import React, { Component } from 'react';

class RadioSleep extends Component {
  state = {
    user: this.props.activeuser,
    quality: '',
    qualityList: ['Bad', 'Normal', 'Good'],
  };

  onChangeQuality = (event) => {
    this.setState({
      quality: event.target.value,
    });
  };

  render() {
    const labels = this.state.qualityList.map((quality) => {
      return (
        <label id="quality">
          {quality}
          <input
            type="radio"
            value={quality}
            checked={this.state.quality === quality}
            onChange={this.onChangeQuality}
          />
        </label>
      );
    });

    return (
      <div>
        <div id="radioContainer">{labels}</div>
      </div>
    );
  }
}

export default RadioSleep;
