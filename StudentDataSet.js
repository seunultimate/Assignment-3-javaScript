// Olajide Oluwaseun David

//Assignment on student dataset for GNS 001
const students = [
    {name: "Gaius Femi", age: 30, dept: "Computer Science", score: 95},
    {name: "Sanyaolu Femi", age: 20, dept: "Statistics", score: 55},
    {name: "Joy Donatus", age: 27, dept: "Biology Education", score: 75},
    {name: "Makanjuola David", age: 33, dept: "Computer Engineering", score: 99},
    {name: "Wasiu Ayinde", age: 45, dept: "Computer Education", score: 61},
    {name: "Seyi Tinubu", age: 20, dept: "Microbiology", score: 35},
    {name: "Christy Aco", age: 25, dept: "MAACE", score: 85},
    {name: "Oluwaseun Akinola", age: 29, dept: "Computer Science", score: 90},
    {name: "Ayo Oladipo", age: 22, dept: "Statistics", score: 24},
    {name: "Tolu Adebayo", age: 31, dept: "Biology Education", score: 49}
];

// Filter students who scored 60 and above
const passedStudents = students.filter(student => student.score >= 60);
console.log(passedStudents);

// Get and map the names of all students
const studentNames = students.map(student => student.name);
console.log(studentNames);

// calculate the total score of all students using reduce
const totalScore = students.reduce((total, student) => total + student.score, 0);
console.log(totalScore);

// Calculate the average score of all students
const averageScore = students.reduce((total, students) => total + students.score, 0) / students.length;
console.log(averageScore);

// Sort students by score in descending order
const sortedStudents = students.sort((a, b) => b.score - a.score);
console.log(sortedStudents);

// Check if all students scored above 90
const highScore = students.some(student => students.score > 90);
console.log(highScore);


const allPassed = students.every(student => student.score >= 60);
console.log(allPassed);