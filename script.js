
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    
    calculateAverage() {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    
    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    
    getResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}


const studentsList = [
    new Student(101, "Ahmed", [90, 85, 95], 90),
    new Student(102, "Mohamed", [45, 48, 48], 80),
    new Student(103, "Sara", [40, 45, 44], 70),
    new Student(104, "Mona", [60, 65, 70], 85)
];


console.log("===== Students Report =====");

studentsList.forEach((student) => {
    const average = student.calculateAverage();
    const grade = student.getGrade(average);
    const result = student.getResult(average);

    console.log("--------------------------");
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Average:", average);
    console.log("Grade:", grade);
    console.log("Result:", result);
});


const strugglingStudents = studentsList.filter((student) => {
    const average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// Add 5 Grace Marks using map
const studentsAfterGrace = strugglingStudents.map((student) => {
    const oldAverage = student.calculateAverage();
    const newAverage = oldAverage + 5;

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: newAverage,
        graceMarks: 5
    };
});


const totalNewAverages = studentsAfterGrace.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);


let graceAverage = 0;

if (studentsAfterGrace.length > 0) {
    graceAverage = totalNewAverages / studentsAfterGrace.length;
} else {
    graceAverage = 0;
}


console.log("===== Grace Committee =====");

console.log("Struggling Students After Grace:");
console.log(studentsAfterGrace);

console.log("Total New Averages:", totalNewAverages);

console.log("Grace Average:", graceAverage);
