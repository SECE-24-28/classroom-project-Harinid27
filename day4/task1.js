const student = {
    name: "Harini",
    age: 20,
    department: "Computer Science",
    marks: [85, 92, 78]
};

console.log("=== ORIGINAL STUDENT OBJECT ===");
console.log(student);

console.log("\n=== ALL VALUES ===");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Department:", student.department);
console.log("Marks:", student.marks);

student.name = "Harini D";
console.log("\n=== AFTER NAME CHANGE ===");
console.log("New Name:", student.name);

const avgMarks = student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length;
student.average = avgMarks.toFixed(2);
console.log("\n=== AFTER ADDING AVERAGE ===");
console.log("Average:", student.average);
console.log("Full Object:", student);

const highestMark = Math.max(...student.marks);
console.log("\n=== HIGHEST MARK ===");
console.log("Highest Mark:", highestMark);
console.log("All Marks:", student.marks);
