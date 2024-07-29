export default function getStudentIdsSum(students) {
  const result = students.reduce((sum, currentStudent) => sum + currentStudent.id, 0);
  return result;
}
