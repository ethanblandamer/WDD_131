let courses = ["WDD131", "ITM220", "WDD231", "CSE212"];
// arrays start with index 0
console.log(courses[0]);

// javascipt object
let courseAndGPA = {
    courseName: "WDD131",
    courseGPA: 3.7,
    professor: "Brother Warner"
}

console.log(courseAndGPA);
console.log(courseAndGPA.courseName);

// array of objects
let coursesAndGPAs = [
    {
        courseName: "WDD131",
        courseGPA: 3.7,
        professor: "Brother Warner",
        assignments: [
            {
                assignmentName: "W01 Prove",
                assignmentGrade: 89
            }
        ]
    },
    {
        courseName: "WDD231",
        courseGPA: 4,
        professor: "Brother Warner"
    },
]

// Challenge: retrieve course name of second object and print to screen
console.log(coursesAndGPAs[1].courseName);
console.log(coursesAndGPAs[0].assignments[0].assignmentName);

// looping through an array traditional for loop
for(let i = 0; i < coursesAndGPAs.length; i++) {
    console.log(coursesAndGPAs[i].courseName);
    console.log(coursesAndGPAs[i].courseGPA);
}

// looping through with a forEach loop
coursesAndGPAs.forEach(item => {
    console.log(item.courseName),
    console.log(item.courseGPA)
});

let body = document.querySelector('body');

// built out HTML dynamically based on array contents

coursesAndGPAs.forEach(course => {
    let dynamicHTML =`
        <div>
            <h1>${course.courseName}</h1>
            <h2>${course.courseGPA}</h2>
        </div>
    `;
    body.innerHTML += dynamicHTML;
})