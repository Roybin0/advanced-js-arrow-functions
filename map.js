// Using a for loop 
let nums = [1, 2, 3, 4, 5]; 
let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);

// Using map() 
const multiplyByTwo = function (num) {
    return num * 2; 
}

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

 
// Simplified w/ map() 
const mapSimple = nums.map(function (num) { return num * 2});
console.log(mapSimple);


// Simplified w/ map() + arrow function
const mapArrow = nums.map(num => num * 2);
console.log(mapArrow);


// With objects 
const students = [
    {
        id: 1, 
        name: 'Mark',
        profession: 'Developer',
        skill: 'Javascript'
    },
    {
        id: 2, 
        name: 'Jodie',
        profession: 'Developer',
        skill: 'Python'
    },
    {
        id: 3, 
        name: 'Mary',
        profession: 'Designer',
        skill: 'CSS'
    }
];

const studentsWithIds = students.map( ({ id, name }) => ({ [name]: id }) ); 
console.log(studentsWithIds);

const studentsWithIds2 = students.map(student => [student.name, student.id]);
console.log(studentsWithIds2);

const studentsWithAges = (name, age) => {

    for (i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            students[i].age = age;
        }

        return students[i];
    }
    
};

const newStudents = studentsWithAges('Mark', 35);
console.log(newStudents); 
console.log(students);