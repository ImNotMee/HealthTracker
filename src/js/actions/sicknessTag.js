export const addTag = (log) => {
  const symptomList = log.state.list;

  const symptom = log.state.symptom;
  if (symptomList.includes(symptom) === false) {
    symptomList.push(symptom);
  }
  log.setState({
    list: symptomList,
  });
};

export const removeTag = (log, symptom) => {
  const reTag = log.state.list.filter((s) => {
    return s !== symptom;
  });

  log.setState({
    list: reTag,
  });
};
