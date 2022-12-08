let num1 = prompt("Enter A Number")
let num2 = prompt("Enter Number Again")
let p = document.querySelector("p")

let value1 = Number.parseInt(num1)
let value2 = Number.parseInt(num2)

function lessThan100(value1, value2) {
    let total = value1 + value2;
    if (total <= 100) {
        p.innerHTML = true;
    } else {
        p.innerHTML = false;
    }
}
lessThan100(value1, value2);