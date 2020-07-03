import React, { Component } from 'react';
import SymptomTag from './../SymptomTag/SymptomTag';
import './../styles.css';
class SymptomList extends Component {
  render() {
    const { symptoms, logComponent } = this.props;

    return (
      <div id={this.props.id}>
        {symptoms.map((symptom, index) => (
          <SymptomTag key={index} symptom={symptom} logComponent={logComponent} />
        ))}
      </div>
    );
  }
}

export default SymptomList;
