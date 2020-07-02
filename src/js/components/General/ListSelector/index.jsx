import React, { Component } from 'react';
import './styles.css';

class ListSelector extends Component {
  state = {
    user: this.props.activeUser,
  };

  render() {
    const { options, onChangeHandler } = this.props;

    return (
      <div id={this.props.id}>
        {this.props.autoComplete !== 'false' ? (
          <div>
            <input
              className={`input ${this.props.className}`}
              type="text"
              list={`${this.props.name}`}
              name={`${this.props.name}`}
              id="ListInput"
              autoComplete={this.props.autoComplete}
              onChange={onChangeHandler}
              value={this.props.defaultValue}
            />
            <datalist id={`${this.props.name}`}>
              {options !== undefined
                ? options.map((value) => <option key={value} className="option" value={value} />)
                : ''}
            </datalist>
          </div>
        ) : (
          <select
            className={`input ${this.props.className}`}
            type="text"
            list={`${this.props.name}`}
            name={`${this.props.name}`}
            id="ListInput"
            onChange={onChangeHandler}
            value={this.props.defaultValue}
          >
            <option value=""> select </option>
            {options !== undefined
              ? options.map((value) => (
                  <option key={value} className="option" value={value}>
                    {value}
                  </option>
                ))
              : ''}
          </select>
        )}
      </div>
    );
  }
}

export default ListSelector;
