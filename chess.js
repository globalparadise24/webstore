document.addEventListener("DOMContentLoaded", function() {
    const chessboard = document.getElementById("chessboard");
    const board = [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ];

    function renderBoard() {
        chessboard.innerHTML = '';
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const cell = document.createElement("div");
                cell.className = `cell ${(row + col) % 2 === 0 ? 'white' : 'black'}`;
                cell.textContent = board[row][col];
                chessboard.appendChild(cell);
            }
        }
    }

    renderBoard();
});
