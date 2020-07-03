export const removeStudent = (queue, student) => {
  //log(student)

  // filters out the student we don't want.
  const filteredStudents = queue.state.students.filter((s) => {
    return s !== student;
  });

  //log(filteredStudents)

  queue.setState({
    students: filteredStudents,
  });
};
