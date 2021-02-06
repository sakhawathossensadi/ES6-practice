class Student
{
    constructor(sId,sName)
    {
        this.id = sId;
        this.name = sName;
        this.schoolName = "D.M Academy";
    }
}

const student1 = new Student(7852,"Sakhawat Hossen");
const student2 = new Student(7888,"Sadi");

console.log(student1);
console.log(student2);
console.log(student1.name);