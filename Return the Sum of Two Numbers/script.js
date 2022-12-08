function sum(a, b) {
    return a + b;
}
let p = document.querySelector("p")
let userInput1 = prompt("Enter a Number")
let userInput2 = prompt("Enter again")

let parserd1 = Number.parseInt(userInput1)
let parserd2 = Number.parseInt(userInput2)
p.innerHTML = (sum(parserd1, parserd2))