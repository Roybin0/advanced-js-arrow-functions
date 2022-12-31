let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
     
    let noStudents = 0;
    let resultsArray = [];
    let total = 0;  
    
    for (var i = 0; i < arr.length; i++) {  
        if (subject in arr[i].results) {
            noStudents = noStudents + 1; 
            resultsArray.push(arr[i].results)
        }
    }; 

    for (var j = 0; j < resultsArray.length; j++) {
        if (resultsArray[j][subject] > 0) {
            total = total + resultsArray[j][subject];
        }
    };

    let average = total / noStudents; 

    return average;
};
    
let averageMarks = averagePoints(students, 'maths');

console.log(averageMarks);
