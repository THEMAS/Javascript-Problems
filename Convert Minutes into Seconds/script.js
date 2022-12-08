
let p = document.querySelector("p")
let days = 365;
let age = prompt("Enter Your Age")

function ageCounter(age) {
    let total = age * 365;

    p.innerHTML = `Your Age is ${age} year and Days is ${total}`;
}

ageCounter(age)