
let arr = ["Apple", "Mango", "Grapes"];
let userValue = prompt("Enter 0, 1, 2");
let p = document.querySelector("p");

function main() {
    if (userValue == 0) {
        p.innerHTML = arr[0];
    }
    else if (userValue == 1) {
        p.innerHTML = arr[1];
    }
    else if (userValue == 2) {
        p.innerHTML = arr[2];
    }
    else {
        alert("Please Enter Invalid Value")
    }
}
main()