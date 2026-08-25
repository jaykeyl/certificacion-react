const cells = document.querySelectorAll(".cell");

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {

        cell.classList.add("revealed");

        if (cell.textContent === "💣") {
            cell.textContent = "💥";

            const row = cell.parentElement.rowIndex;
            const col = cell.cellIndex;

            const rows = document.querySelectorAll("tr");

            for (let i = row - 1; i <= row + 1; i++) {
                for (let j = col - 1; j <= col + 1; j++) {

                    if (i === row && j === col) {
                        continue;
                    }

                    if (rows[i]) {

                        const nearbyCell = rows[i].cells[j];

                        if (nearbyCell) {   
                            nearbyCell.textContent = "❌";
                            nearbyCell.classList.add("revealed");
                        }
                    }
                }
            }

        } else {
            cell.textContent = "😎";
        }

    });
});