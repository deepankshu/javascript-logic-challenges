const students = [
  { name: "Alice", marks: 85, grade: "A" },
  { name: "Bob", marks: 45, grade: "C" },
  { name: "Charlie", marks: 72, grade: "B" },
  { name: "Diana", marks: 30, grade: "D" }
];

const total = students.reduce((sum, student) => sum + student.marks, 0);
const avgMarks = total / students.length; // ✅ students not student
console.log(avgMarks); // 58

const studentPassed = students.filter(student => student.marks > 50);
console.log(studentPassed);

const gradeLabel = students.map(student => student.grade); // ✅ student not students
console.log(gradeLabel); // ["A", "C", "B", "D"]