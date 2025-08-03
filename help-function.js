import {getStudentById,getClassAverage,getTopStudents,getStudentsByScoreRange,sortStudentsByName,studentList} from './BTTP.js'


const sv = getStudentById(studentList, 3);
console.log(sv);

const top = getTopStudents(studentList);
console.log(top);

const ave = getClassAverage(studentList);
console.log(ave)

const minMax=getStudentsByScoreRange(studentList,1,6)
console.log(minMax)

console.log(sortStudentsByName(studentList))