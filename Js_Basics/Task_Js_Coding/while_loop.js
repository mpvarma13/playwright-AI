// 1️⃣ Print "Playwright" 5 times

// 2️⃣ Print numbers from 1 to 10

// 3️⃣ Print even numbers from 1 to 20

// 4️⃣ Calculate sum of first 10 natural numbers

// 5️⃣ Print the multiplication table of 7

let i=1;
while(i<=5){
    console.log("Playwright");
    i++;
}
console.log("-------------");

i=1;
while(i<=10){
    console.log(i);
    i++;
}

console.log("-------------");

i=1;
while(i<=20){
    if(i%2==0){
        console.log(i);
    }
    i++;
}

console.log("-------------");

let sum=0;
i=1;
while(i<=10){
    sum+=i;
    i++;
}
console.log("Sum of first 10 natural numbers:", sum);

console.log("-------------");

i=1;
while(i<=10){
    console.log(`7 x ${i} = ${7*i}`);
    i++;
}