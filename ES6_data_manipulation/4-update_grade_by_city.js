function updateStudentGradeByCity(students, city, newGrades) {
  const filtered = students.filter(student => student.location === city);
  const withGrades = filtered.map(student => {
    const gradeInfo = newGrades.find(gradeObj => gradeObj.studentId === student.id);
    
    return { 
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: gradeInfo ? gradeInfo.grade : "N/A"
    };
  });
  return withGrades;
}

export default updateStudentGradeByCity;