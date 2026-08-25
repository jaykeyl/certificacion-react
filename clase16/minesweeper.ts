// console.log("This is a minesweeper")

// let table = document.querySelector<HTMLTableElement>(".minesweeper")

// if(table) {
//     console.log(table.tagName)
//     console.log(table.classList)
// }

// let cell = document.querySelector<HTMLTableCellElement>("tr")

// if(cell) {
//     console.log(cell.textContent)
// }

let elementList = document.querySelectorAll("td")

for (const element of elementList) {
    element.addEventListener('click', function () {
        console.log(element.textContent)
        console.log(element.classList.value)

        if (element.classList.contains("bomb")) {
            for (const item of elementList) {
                item.textContent = "💥";
                item.style.color = "black";
            }
        }
            element.style.color = "black"
    })
}