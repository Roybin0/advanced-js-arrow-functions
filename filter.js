// Simple filtering
const people = [
    {
        name: 'Michael', 
        age: 23
    },
    {
        name: 'Liam',
        age: 28
    },

    {
        name: 'Paul',
        age: 30
    }
];

const oldEnough = people.filter(person => person.age >= 25);
console.log(oldEnough);

const paul = people.filter(p => p.name === 'Paul')[0];
console.log(paul);

// Complex filtering 
const students = [
    {
        id: 1, 
        name: 'Mark',
        profession: 'Developer',
        skills: [
            { name: 'Javascript', yrsExperience: 1}, 
            { name: 'HTML', yrsExperience: 3}, 
            { name: 'CSS', yrsExperience: 4}
        ]
    },
    {
        id: 2, 
        name: 'Jodie',
        profession: 'Developer',
        skills: [
            { name: 'Python', yrsExperience: 1}, 
            { name: 'Javascript', yrsExperience: 5}, 
            { name: 'SQL', yrsExperience: 3}
        ]
    },
    {
        id: 3, 
        name: 'Mary',
        profession: 'Designer',
        skills: [
            { name: 'CSS', yrsExperience: 1}, 
            { name: 'SQL', yrsExperience: 5}, 
            { name: 'Python', yrsExperience: 3}
        ]
    }
];

const has5YearsExp = skills => skills.yrsExperience >= 5; 
const hasStrongSkills = student => student.skills.filter(has5YearsExp).length > 0; 

const candidates = students.filter(hasStrongSkills);
console.log(candidates);

const names = candidates.map(c => c.name); 
console.log(names);