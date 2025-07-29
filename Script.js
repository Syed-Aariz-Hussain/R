// 1. Even or Odd
let num = 5;
console.log(num % 2 === 0 ? "Even" : "Odd");

// 2. Voting Eligibility
let age = 20;
console.log(age >= 18 ? "Eligible to vote" : "Not eligible");

// 3. Numbers 1 to 10
for (let i = 1; i <= 10; i++) console.log(i);

// 4. Even numbers 1 to 20
let i = 1;
while (i <= 20) {
  if (i % 2 === 0) console.log(i);
  i++;
}

// 5. Reverse String
let str = "hello";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) rev += str[i];
console.log(rev);

// 6. Add Two Numbers
function add(a, b) {
  return a + b;
}

// 7. Factorial Function
function factorial(n) {
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

// 8. Palindrome Check
function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}

// 9. Student Object
const student = {
  name: "Ali",
  rollNo: 1,
  marks: 85,
  isPassed: true
};

// 10. Access Properties
console.log(student.name);
console.log(student["marks"]);

// 11. Add Method
student.sayHello = function() {
  console.log(`Hello, I am ${this.name}`);
};

// 12. Print All Keys & Values
function printObject(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

// 13. Array of Fruits
let fruits = ["mango", "banana", "apple"];

// 14. Add Fruit
fruits.push("orange");

// 15. Remove Last Fruit
fruits.pop();

// 16. Check for Banana
console.log(fruits.includes("banana"));

// 17. Multiply by 2
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);

// 18. Filter Age >= 18
let ages = [12, 25, 17, 20];
let adults = ages.filter(age => age >= 18);

// 19. Find First > 10
let arr = [5, 8, 15, 3];
let firstOver10 = arr.find(n => n > 10);

// 20. Print Names
let names = ["Ali", "Zara", "Umar"];
names.forEach(n => console.log(n));

// 21. Map Student Names
const students = [
  { name: "Ali", marks: 80 },
  { name: "Zara", marks: 95 },
  { name: "Umar", marks: 45 }
];
let studentNames = students.map(s => s.name);

// 22. Students with marks > 50
let passedStudents = students.filter(s => s.marks > 50);

// 23. Find Zara
let zara = students.find(s => s.name === "Zara");

// 24. Print name and marks
students.forEach(s => console.log(`${s.name}: ${s.marks}`));

// 25. Square numbers
let nums2 = [2, 4, 6, 8];
let squared = nums2.map(n => n * n);

// 26. Display each name
["Ali", "Zara", "Umar", "Ahmed"].forEach(name => console.log(name));

// 27. Ages > 18
let ageList = [12, 25, 17, 20, 16, 30];
let above18 = ageList.filter(a => a > 18);

// 28. Check apple in array
console.log(["banana", "mango", "grapes", "apple"].includes("apple"));

// 29. First student marks > 90
let topper = [
  { name: "Ali", marks: 75 },
  { name: "Zara", marks: 92 },
  { name: "Umar", marks: 85 }
].find(s => s.marks > 90);

// 30. Total sum
let total = [200, 150, 300, 100].reduce((sum, n) => sum + n, 0);

// 31. Return only usernames
let users = [
  { id: 1, username: "ali123" },
  { id: 2, username: "zara88" },
  { id: 3, username: "umar_01" }
];
let usernames = users.map(u => u.username);

// 32. Return odd numbers
let numbers = [1, 2, 3, 4, 5, 6];
let oddNumbers = numbers.filter(n => n % 2 !== 0);

// 33. Count vowels in "javascript"
let word = "javascript";
let vowels = "aeiou";
let vowelCount = 0;
for (let char of word) {
  if (vowels.includes(char)) vowelCount++;
}

// 34. Task status display
let tasks = [
  { task: "Assignment", completed: true },
  { task: "Homework", completed: false }
];
tasks.forEach(t => {
  console.log(`Task: ${t.task} - Status: ${t.completed ? "Completed" : "Incomplete"}`);
});

// 35. Add status: "active" to all
let employees = [
  { name: "Ali" },
  { name: "Zara" },
  { name: "Umar" }
];
let updatedEmployees = employees.map(emp => ({ ...emp, status: "active" }));
