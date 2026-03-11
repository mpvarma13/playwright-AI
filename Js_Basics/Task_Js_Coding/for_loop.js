// 1️⃣ Print "Hello" 5 times

// 2️⃣  Print numbers from 1 to 10

// 3️⃣ Print even numbers from 1 to 20

// 4️⃣ Print the sum of first 10 natural numbers

// 5️⃣ Print the multiplication table of 5

for (let i=1;i<=5;i++){
    console.log("Hello");
}
console.log("-------------"); 

for (let i=1;i<=10;i++){
    console.log(i);
}

console.log("-------------");

for (let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}

console.log("-------------");

let sum=0;
for (let i=1;i<=10;i++){
    sum+=i;
}
console.log("Sum of first 10 natural numbers:", sum);

console.log("-------------");

for (let i=1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
}