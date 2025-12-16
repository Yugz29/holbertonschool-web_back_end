function getStudentIdsSum(list) {
    return list.reduce((acc, student) => acc + student.id, 0)
}

export default getStudentIdsSum;
