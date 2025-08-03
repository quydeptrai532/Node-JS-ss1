class student{
    constructor(id,name,age,scores){
        this.id=id;
        this.name=name;
        this.age=age;
        this.scores=scores;
    }
}
const sv1=new student(1,`quy`,20,[10,10,10]);
const sv2=new student(2,`an`,20,[1,2,3]);
const sv3=new student(3,`bach`,20,[2,3,4]);
const sv4=new student(4,`cuong`,20,[3,4,5]);
const sv5=new student(5,`quang`,20,[4,5,6]);
const studentList=[];
studentList.push(sv1)
studentList.push(sv2)
studentList.push(sv3)
studentList.push(sv4)
studentList.push(sv5)

function getStudentById(studentList, id){
     return studentList.find(e=>e.id===id)
}
function getTopStudents(studentList){
    let indexMax=0;
    let currentMax=studentList[0].scores.reduce((a,b)=> a+b,0)/3;
    for(let i=1;i<5;i++){
        let max=studentList[i].scores.reduce((a,b)=>a+b,0)/3;
        if(max>currentMax){
            currentMax=max;
            indexMax=i;
        }
    }
    return studentList[indexMax];
}
function getClassAverage(studentList){
    const totalScore=studentList.reduce((sum,students)=>{
        const avg=students.scores.reduce((a,b)=>a+b,0)/3;
        return sum+avg;
    },0)
    return totalScore/studentList.length
}

function getStudentsByScoreRange(studentList, min, max){
    return studentList.filter(student => {
    const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    return avg >= min && avg <= max;
  });
}

function sortStudentsByName(studentList){
    studentList.sort((a,b)=>{
        if(a.name>b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    });
    return studentList
}
export{getStudentById,getClassAverage,getTopStudents,getStudentsByScoreRange,sortStudentsByName,studentList}