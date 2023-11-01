let submission = [
  { name: "Jane", score: 95, passed: true },
  { name: "Joe", score: 77, passed: true },
  { name: "Jack", score: 59, passed: false },
  { name: "Jill", score: 88, passed: true },
];
function addSubmission(array, newName, newScore, newPassed) {
  let newStudent = {
    name: newName,
    score: newScore,
    passed: newPassed,
  };
  if (newStudent.score >= 60) {
    newStudent.passed = true;
  } else {
    newStudent.passed = false;
  }
  array.push(newStudent);
}
function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
function deleteSubmissionByName(array, name) {
  let index = array.findIndex((student) => {
    return student.name === name;
  });
  array.splice(index, 1);
}
function editSubmission(array, index, score) {
  let student = array[index];
  student.score = score;
  if (student.score >= 60) {
    student.passed = true;
  } else {
    student.passed = false;
  }
}
function findSubmissionByName(array, name) {
  let student = array.find((student) => {
    return student.name === name;
  });
  return student;
}
function findLowestScore(array) {
  let lowestScore = array[0];
  array.forEach((student) => {
    if (student.score < lowestScore.score) {
      lowestScore = student;
    }
  });
  return lowestScore;
}
function findAverageScore(array) {
  let sum = 0;
  for (let student of array) {
    sum += student.score;
  }
  return sum / array.length;
}
function filterPassing(array) {
  let passingStudents = array.filter((student) => {
    return student.passed;
  });
  return passingStudents;
}
function filter90AndAbove(array) {
  let students = array.filter((student) => {
    return student.score >= 90;
  });
  return students;
}
function createRange(start, end) {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}
addSubmission(submission, "Jill", 99, true);
deleteSubmissionByIndex(submission, 1);
deleteSubmissionByName(submission, "Jill");
editSubmission(submission, 0, 20);
findSubmissionByName(submission, "Jill");
findLowestScore(submission);
findAverageScore(submission);
filterPassing(submission);
filter90AndAbove(submission);
console.log(submission);
