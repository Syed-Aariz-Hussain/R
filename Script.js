
let num = 5;
console.log(num % 2 === 0 ? "Even" : "Odd");


let age = 20;
console.log(age >= 18 ? "Eligible to vote" : "Not eligible");


for (let i = 1; i <= 10; i++) console.log(i);


let i = 1;
while (i <= 20) {
  if (i % 2 === 0) console.log(i);
  i++;
}


let str = "hello";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) rev += str[i];
console.log(rev);


function add(a, b) {
  return a + b;
}


function factorial(n) {
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}


function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}


const student = {
  name: "Ali",
  rollNo: 1,
  marks: 85,
  isPassed: true
};


console.log(student.name);
console.log(student["marks"]);

// 11. Add Method
student.sayHello = function() {
  console.log(`Hello, I am ${this.name}`);
};


function printObject(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}


let fruits = ["mango", "banana", "apple"];


fruits.push("orange");


fruits.pop();


console.log(fruits.includes("banana"));


let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);


let ages = [12, 25, 17, 20];
let adults = ages.filter(age => age >= 18);


let arr = [5, 8, 15, 3];
let firstOver10 = arr.find(n => n > 10);


let names = ["Ali", "Zara", "Umar"];
names.forEach(n => console.log(n));


const students = [
  { name: "Ali", marks: 80 },
  { name: "Zara", marks: 95 },
  { name: "Umar", marks: 45 }
];
let studentNames = students.map(s => s.name);


let passedStudents = students.filter(s => s.marks > 50);


let zara = students.find(s => s.name === "Zara");


students.forEach(s => console.log(`${s.name}: ${s.marks}`));


let nums2 = [2, 4, 6, 8];
let squared = nums2.map(n => n * n);


["Ali", "Zara", "Umar", "Ahmed"].forEach(name => console.log(name));


let ageList = [12, 25, 17, 20, 16, 30];
let above18 = ageList.filter(a => a > 18);


console.log(["banana", "mango", "grapes", "apple"].includes("apple"));


let topper = [
  { name: "Ali", marks: 75 },
  { name: "Zara", marks: 92 },
  { name: "Umar", marks: 85 }
].find(s => s.marks > 90);

let total = [200, 150, 300, 100].reduce((sum, n) => sum + n, 0);


let users = [
  { id: 1, username: "ali123" },
  { id: 2, username: "zara88" },
  { id: 3, username: "umar_01" }
];
let usernames = users.map(u => u.username);


let numbers = [1, 2, 3, 4, 5, 6];
let oddNumbers = numbers.filter(n => n % 2 !== 0);

let word = "javascript";
let vowels = "aeiou";
let vowelCount = 0;
for (let char of word) {
  if (vowels.includes(char)) vowelCount++;
}


let tasks = [
  { task: "Assignment", completed: true },
  { task: "Homework", completed: false }
];
tasks.forEach(t => {
  console.log(`Task: ${t.task} - Status: ${t.completed ? "Completed" : "Incomplete"}`);
});


let employees = [
  { name: "Ali" },
  { name: "Zara" },
  { name: "Umar" }
];
let updatedEmployees = employees.map(emp => ({ ...emp, status: "active" }));
