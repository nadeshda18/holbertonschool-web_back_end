export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  const sortFilter = students.filter((student) => student.location === city);

  const mapping = sortFilter.map((student) => {
    const newGrade = newGrades.filter((grade) => grade.studentId === student.id);
    const updatedGrade = { ...student };
    if (newGrade[0]) {
      updatedGrade.grade = newGrade[0].grade;
    } else {
      updatedGrade.grade = 'N/A';
    }
    return updatedGrade;
  });
  return mapping;
}
