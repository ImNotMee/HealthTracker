import React, { Component } from 'react';
import './styles.css';

class ListSelector extends Component {
  state = {
    user: this.props.activeUser,
  };

  render() {
    const { options, onChangeHandler } = this.props;

    return (
      <div>
        <input
          type="text"
          list="list"
          name="list"
          id="List"
          autoComplete="on"
          onChange={onChangeHandler}
        />
        <datalist id="list">
          {options.map((value) => (
            <option key={value} className="option" value={value} />
          ))}
        </datalist>
      </div>
    );
  }
}

export default ListSelector;
