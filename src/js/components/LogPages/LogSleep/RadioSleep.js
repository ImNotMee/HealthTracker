import React, { Component } from 'react';

class RadioSleep extends Component {
  constructor(props) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  state = {
    user: this.props.activeuser,
    quality: '',
  };

  onChangeValue = (event) => {
    this.setState({
      quality: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div id="radioContainer">
          <label id="quality">
            Bad
            <input
              type="radio"
              value="Bad"
              checked={this.state.quality === 'Bad'}
              onChange={this.onChangeValue}
            />
          </label>
          <label id="quality">
            Normal
            <input
              type="radio"
              value="Normal"
              checked={this.state.quality === 'Normal'}
              onChange={this.onChangeValue}
            />
          </label>
          <label id="quality">
            Good
            <input
              type="radio"
              value="Good"
              checked={this.state.quality === 'Good'}
              onChange={this.onChangeValue}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default RadioSleep;
