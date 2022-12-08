
let area = prompt("Enter Width")
let height = prompt("Enter Height")
let p = document.querySelector("p")

function areaOfTriangle(area, height) {
    let areaOfTriangle = area * height
    p.innerHTML = `Area of Triangle is ${areaOfTriangle}`
}
areaOfTriangle(area, height);