import React, { Component } from 'react';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  state = {
    user: this.props.activeuser,
  };
  onChangeValue = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div id="carrier">
          <img id="emoticon" src="https://image.flaticon.com/icons/svg/3084/3084520.svg"></img>
          <input
            type="radio"
            value="angry"
            checked={this.state.selectedOption === 'angry'}
            onChange={this.onChangeValue}
          />
        </div>
        <div id="carrier">
          <img id="emoticon" src="https://image.flaticon.com/icons/svg/3084/3084540.svg"></img>
          <input
            type="radio"
            value="sad"
            checked={this.state.selectedOption === 'sad'}
            onChange={this.onChangeValue}
          />
        </div>
        <div id="carrier">
          <img id="emoticon" src="https://image.flaticon.com/icons/svg/3084/3084437.svg"></img>
          <input
            type="radio"
            value="thoughtful"
            checked={this.state.selectedOption === 'thoughtful'}
            onChange={this.onChangeValue}
          />
        </div>
        <div id="carrier">
          <img id="emoticon" src="https://image.flaticon.com/icons/svg/3084/3084473.svg"></img>
          <input
            type="radio"
            value="soso"
            checked={this.state.selectedOption === 'soso'}
            onChange={this.onChangeValue}
          />
        </div>
        <div id="carrier">
          <img id="emoticon" src="https://image.flaticon.com/icons/svg/3084/3084424.svg"></img>
          <input
            type="radio"
            value="happy"
            checked={this.state.selectedOption === 'happy'}
            onChange={this.onChangeValue}
          />
        </div>
        <div id="carrier">
          <img id="emoticon" src="https://image.flaticon.com/icons/svg/3084/3084622.svg"></img>
          <input
            type="radio"
            value="lovely"
            checked={this.state.selectedOption === 'lovely'}
            onChange={this.onChangeValue}
          />
        </div>
      </div>
    );
  }
}
export default Radio;
