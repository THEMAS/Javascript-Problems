function converter(min) {
    return min * 60;
}

let secondsValue = document.querySelector("#secondsValue");
let minutesValue = document.querySelector("#minutesValue");
let runAgainBtn = document.getElementById("runAgain");

function main() {
    let userInput1 = prompt("Enter a Number");
    let parserd1 = Number.parseInt(userInput1);

    secondsValue.innerHTML = (converter(parserd1))
    minutesValue.innerHTML = parserd1;
}
main()

runAgainBtn.addEventListener("click", () => {
    main()
});