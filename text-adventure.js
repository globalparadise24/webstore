document.addEventListener("DOMContentLoaded", function() {
    const gameText = document.getElementById("game-text");
    const userInput = document.getElementById("user-input");
    const submitBtn = document.getElementById("submit-btn");

    let gameState = {
        location: "start",
        inventory: []
    };

    const gameData = {
        "start": {
            description: "You are in a dark room. There is a door to the north.",
            options: {
                "go north": "hallway"
            }
        },
        "hallway": {
            description: "You are in a hallway. There are doors to the east and west.",
            options: {
                "go east": "kitchen",
                "go west": "library"
            }
        },
        "kitchen": {
            description: "You are in a kitchen. There is a smell of fresh bread.",
            options: {
                "go west": "hallway"
            }
        },
        "library": {
            description: "You are in a library. There are rows of old books.",
            options: {
                "go east": "hallway"
            }
        }
    };

    function updateGameText() {
        const location = gameState.location;
        const description = gameData[location].description;
        gameText.textContent = description;
    }

    function processInput() {
        const input = userInput.value.toLowerCase();
        const location = gameState.location;
        const options = gameData[location].options;

        if (input in options) {
            gameState.location = options[input];
            updateGameText();
        } else {
            gameText.textContent = "Invalid command.";
        }

        userInput.value = "";
    }

    submitBtn.addEventListener("click", processInput);

    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            processInput();
        }
    });

    updateGameText();
});
