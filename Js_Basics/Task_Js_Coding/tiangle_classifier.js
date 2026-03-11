//Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, 
// determine if the triangle is equilateral (all sides are equal), 
// isosceles (exactly two sides are equal), or scalene (no sides are equal). 
// Use an if-else statement to classify the triangle.
//side1, side2, side3 → ?  10,10,10

let side1 =10;
let side2 =20;
let side3 =30;

if (typeof side1 !== "number" || typeof side2 !== "number" || typeof side3 !== "number"
    ||  isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    console.log("Please enter valid numbers for the sides of the triangle.");
}
else if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    console.log("Please enter positive numbers for the sides of the triangle.");
}
else if (side1 === side2 && side2 === side3) {
    console.log("The triangle is equilateral.");
}
else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("The triangle is isosceles.");
}
else {
    console.log("The triangle is scalene.");
}