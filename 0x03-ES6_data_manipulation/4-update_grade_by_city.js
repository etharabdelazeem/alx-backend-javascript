export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  const result = cityStudents.map((student) => {
    const item2 = newGrades.find((student2) => student.id === student2.studentId);
    return { ...student, grade: item2 ? item2.grade : 'N/A' };
  });
  return result;
}
