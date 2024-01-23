document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('gridContainer');
    const grid = document.getElementById('grid');
    const coordinateDisplay = document.getElementById('coordinateDisplay');

    // Add column headers
    for (let col = 0; col <= 10; col++) {
        let header = document.createElement('div');
        header.classList.add('column-header');
        header.textContent = col === 0 ? '' : String.fromCharCode(64 + col);
        gridContainer.appendChild(header);
    }

    // Add row headers and grid cells
    for (let row = 0; row < 10; row++) {
        let header = document.createElement('div');
        header.classList.add('row-header');
        header.textContent = row;
        header.style.gridColumnStart = 1;
        header.style.gridRowStart = row + 2;
        gridContainer.appendChild(header);

        for (let col = 0; col < 10; col++) {
            let cell = document.createElement('div');
            cell.dataset.coordinate = `${String.fromCharCode(65 + col)}${row}`;
            if (row > 0 && row < 9 && col > 0 && col < 9) {
                cell.classList.add('selectable');
            }
            grid.appendChild(cell);
        }
    }

    // Random selection logic
    document.getElementById('randomButton').addEventListener('click', function() {
        let allCells = grid.querySelectorAll('.selectable');
        allCells.forEach(cell => cell.classList.remove('selected'));

        let randomRow = Math.floor(Math.random() * 8);
        let randomCol = Math.floor(Math.random() * 8);
        let index = randomRow * 8 + randomCol;
        let selectedCell = allCells[index];
        selectedCell.classList.add('selected');
        coordinateDisplay.textContent = `Selected Coordinate: ${selectedCell.dataset.coordinate}`;
    });
});
