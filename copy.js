let data=100;
//create a copy of data
data=200;
console.log("data is",data);
console.log("datacopy",datacopy);
let obj ={
    a:10,
    b:20
}
//create copy x
//let copyObj=obj; 
let copyObj={...obj};
//check
obj.a=1234;
console.log("obj",obj);
let student1={
    collegeName:"Anurag",
    collegeAddress:{
        city:"uppal",
        state:"TS"
    },
    studentAddress:{
        city:"hayathnagar",
        state:"TS"
    }
}
//let student2={...student1};
let student2=structuredClone(student1);
//check
student1.collegeAddress.city="hyd";
student1.studentAddress.city="secunderabad";
console.log("student1",student1);
console.log("student2",student2);
