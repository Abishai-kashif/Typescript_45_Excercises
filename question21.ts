// Define a TypeScript object

const student: {name: string;age: number;marks: number;isPass: boolean} = {

    name: "Abishai Kashif",
    age: 20,
    marks: 90,
    isPass: true
};


console.log(`The name of the student is ${student.name}
and his age is ${student.age} and his marks are ${student.marks}
 and he is ${student.isPass ? "pass" : "fail"}`);
