/* 📘 README - JavaScript Practice Assignment

This file contains 35 beginner-friendly JavaScript questions for learning.

✅ Topics Covered:
- If/else conditions
- Loops
- Functions
- Arrays & Methods
- Objects
- Map, Filter, Reduce

-------------------------------------
Start solving below each question:
-------------------------------------
*/

// 1. Check even or odd
let num1 = 7;
if (num1 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 2. Age eligibility
let age = 16;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

// 3. Print 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Even numbers 1 to 20 using while loop
let i = 1;
while (i <= 20) {
  if (i % 2 === 0) console.log(i);
  i++;
}

// 5. Reverse a string
let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);

// 6. Function to add 2 numbers
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

// 7. Factorial function
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// 8. Check palindrome
function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}
console.log(isPalindrome("madam"));

// 9. Student object
const student = {
  name: "Ali",
  rollNo: 101,
  marks: 90,
  isPassed: true
};

// 10. Access object properties
console.log(student.name);
console.log(student["rollNo"]);

// 11. Add method inside object
student.intro = function () {
  console.log(`Hello, I am ${this.name}`);
};
student.intro();

// 12. Print object keys and values
function printObj(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
printObj(student);

// 13. Array of fruits
let fruits = ["apple", "banana", "mango"];

// 14. Add fruit
fruits.push("orange");

// 15. Remove last fruit
fruits.pop();

// 16. Check if banana is present
console.log(fruits.includes("banana"));

// 17. Multiply each number by 2
let nums = [2, 4, 6];
let doubled = nums.map(n => n * 2);
console.log(doubled);

// 18. Filter ages >= 18
let ages = [12, 18, 20, 15];
let adults = ages.filter(age => age >= 18);
console.log(adults);

// 19. Find number > 10
let numbers = [4, 5, 15, 8];
let found = numbers.find(n => n > 10);
console.log(found);

// 20. forEach to print names
let names = ["Ali", "Zara", "Umar"];
names.forEach(name => console.log(name));

// 21. Get student names using map
let students = [
  { name: "Ali", marks: 80 },
  { name: "Zara", marks: 95 },
  { name: "Umar", marks: 45 }
];
let studentNames = students.map(s => s.name);
console.log(studentNames);

// 22. Students with marks > 50
let passed = students.filter(s => s.marks > 50);
console.log(passed);

// 23. Find Zara
let zara = students.find(s => s.name === "Zara");
console.log(zara);

// 24. forEach student name and marks
students.forEach(s => console.log(`${s.name} - ${s.marks}`));

// 25. Square numbers
let squareNums = [2, 4, 6, 8];
let squared = squareNums.map(n => n * n);
console.log(squared);

// 26. Display each name
let people = ["Ali", "Zara", "Umar", "Ahmed"];
people.forEach(p => console.log(p));

// 27. Ages above 18
let ageList = [12, 25, 17, 20, 16, 30];
let above18 = ageList.filter(a => a > 18);
console.log(above18);

// 28. Check if apple exists
let items = ["banana", "mango", "grapes", "apple"];
console.log(items.includes("apple"));

// 29. Find first student with marks > 90
let topStudent = [
  { name: "Ali", marks: 75 },
  { name: "Zara", marks: 92 },
  { name: "Umar", marks: 85 }
].find(s => s.marks > 90);
console.log(topStudent);

// 30. Total sum
let bills = [200, 150, 300, 100];
let total = bills.reduce((sum, val) => sum + val, 0);
console.log(total);

// 31. Get usernames only
let users = [
  { id: 1, username: "ali123" },
  { id: 2, username: "zara88" },
  { id: 3, username: "umar_01" }
];
let usernames = users.map(u => u.username);
console.log(usernames);

// 32. Get only odd numbers
let values = [1, 2, 3, 4, 5, 6];
let odds = values.filter(n => n % 2 !== 0);
console.log(odds);

// 33. Count vowels
let word = "javascript";
let vowelCount = word.split("").filter(c => "aeiou".includes(c)).length;
console.log(vowelCount);

// 34. Print task status
let taskList = [
  { task: "Assignment", completed: true },
  { task: "Homework", completed: false }
];
taskList.forEach(t =>
  console.log(`Task: ${t.task} - Status: ${t.completed ? "Completed" : "Incomplete"}`)
);

// 35. Add "status: active" to employees
let employees = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Zara" }
];
let updated = employees.map(e => ({ ...e, status: "active" }));
console.log(updated);
