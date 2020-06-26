import React, { Component } from 'react';

class RadioMood extends Component {
  constructor(props) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  state = {
    user: this.props.activeuser,
    mood: '',
  };
  onChangeValue = (event) => {
    this.setState({
      mood: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div id="carrier">
          <img
            id="emoticon"
            src="https://image.flaticon.com/icons/svg/3084/3084520.svg"
            alt="icon"
          ></img>
          <input
            type="radio"
            value="angry"
            checked={this.state.mood === 'angry'}
            onChange={this.onChangeValue}
          />
        </div>
        <div id="carrier">
          <img
            id="emoticon"
            src="https://image.flaticon.com/icons/svg/3084/3084540.svg"
            alt="icon"
          ></img>
          <input
            type="radio"
            value="sad"
            checked={this.state.mood === 'sad'}
            onChange={this.onChangeValue}
          />
        </div>
        <div id="carrier">
          <img
            id="emoticon"
            src="https://image.flaticon.com/icons/svg/3084/3084437.svg"
            alt="icon"
          ></img>
          <input
            type="radio"
            value="thoughtful"
            checked={this.state.mood === 'thoughtful'}
            onChange={this.onChangeValue}
          />
        </div>
        <div id="carrier">
          <img
            id="emoticon"
            src="https://image.flaticon.com/icons/svg/3084/3084473.svg"
            alt="icon"
          ></img>
          <input
            type="radio"
            value="soso"
            checked={this.state.mood === 'soso'}
            onChange={this.onChangeValue}
          />
        </div>
        <div id="carrier">
          <img
            id="emoticon"
            src="https://image.flaticon.com/icons/svg/3084/3084424.svg"
            alt="icon"
          ></img>
          <input
            type="radio"
            value="happy"
            checked={this.state.mood === 'happy'}
            onChange={this.onChangeValue}
          />
        </div>
        <div id="carrier">
          <img
            id="emoticon"
            src="https://image.flaticon.com/icons/svg/3084/3084622.svg"
            alt="icon"
          ></img>
          <input
            type="radio"
            value="lovely"
            checked={this.state.mood === 'lovely'}
            onChange={this.onChangeValue}
          />
        </div>
      </div>
    );
  }
}
export default RadioMood;
