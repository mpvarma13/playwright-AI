//Write a program that calculates and displays the
//  letter grade for a given numerical score (e.g., A, B, C, D, or F) 
// based on the following grading scale:

// A: 90-100

// B: 80-89

// C: 70-79

// D: 60-69

// F: 0-59




let grade;
let score = "abc";

if (typeof score !== "number" || isNaN(score)) {
    console.log("Please enter a valid number for the score.");
}
else if (score < 0 || score > 100) {
    console.log("Please enter a score between 0 and 100.");
}
if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score < 90) {
    grade = 'B';
} else if (score >= 70 && score < 80) {
    grade = 'C';
} else if (score >= 60 && score < 70) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log(`Your score is ${score}, and your grade is ${grade}.`); 