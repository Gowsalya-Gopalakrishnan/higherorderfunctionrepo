//Filter the students to create a new array of students who scored above 60 marks.
const students =[ { name: "Alice", marks: 58 },{ name: "Bob", marks: 85},{ name: "Charlie", marks: 92 },{ name: "David", marks: 80 }];
function processStudents(){
const highMark = students.filter(stu => stu.marks > 60);
console.log(highMark);

// //Sort the filtered array in descending order of marks.
// console.log({highMark:{marks}})
const sortValue = highMark.sort((a,b) => b.marks - a.marks);
console.log(sortValue);

// Map the sorted array to extract only the names of the students.
let names=sortValue.map(sortValue=>sortValue.name);
console.log(names)
// Return the array of sorted names.
const final = sortValue.filter(sortValue=>sortValue.marks > 80? true: false).map(sortValue => sortValue.name);
console.log(final);
}
processStudents(students);




