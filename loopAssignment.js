// Olajide Oluwaseun David

// Multiplication table using while loop
let number = 120;
let i = 0;

console.log("Multiplication Table of " + number);

while (i <= 30) {
    console.log(number + " x " + i + " = " + (number * i));
    i++;
}

// Multiplication table using nested loops

for (let i = 1; i = 15; i++) {
    console.log("Table of " + i);

    for (let j = 1; j <= 70; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
    console.log("------------------------------");
}