let userScore = parseInt(localStorage.getItem("userScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
const userScore_el = document.getElementById("userScore");
const computerScore_el = document.getElementById("computerScore");
const buttons_div = document.querySelector(".buttons");
const start_div = document.querySelector(".start");

document.getElementById("ruleButton").addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});

function updateScore() {
    userScore_el.textContent = userScore;
    computerScore_el.textContent = computerScore;
    // Update local storage with current scores
    localStorage.setItem("userScore", userScore);
    localStorage.setItem("computerScore", computerScore);
}

updateScore();

function computerAns() {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber, choices[randomNumber])
    return choices[randomNumber];
}

function winDecision(userChoice, computerChoice) {
    userScore++;
    updateScore();
    userScore_el.textContent = userScore;
    computerScore_el.textContent = computerScore;
    if ((userScore % 2 == 0 || (userScore > computerScore)) && userScore > 8) {
        const winMessage = document.createElement("p");
        winMessage.textContent = "You win!";
        winMessage.classList.add("drawMessage");
        start_div.appendChild(winMessage);
        document.querySelector('.finger.blue').classList.add('halo');

        buttons_div.innerHTML = "";

        const nextButton = document.createElement("button");
        nextButton.innerText = "Next";
        nextButton.classList.add("nextButton");
        nextButton.addEventListener("click", function () {
            window.location.href = "../userwins/userwins.html";
        });
        start_div.appendChild(nextButton);

        const playAgainButton = document.createElement("button");
        playAgainButton.innerText = "Play Again";
        playAgainButton.classList.add("playAgainButton");
        playAgainButton.addEventListener("click", function () {
            location.reload();
        });
        start_div.appendChild(playAgainButton);
    }
}

function loseDecision(userChoice, computerChoice) {
    computerScore++;
    updateScore();
    userScore_el.textContent = userScore;
    computerScore_el.textContent = computerScore;
    if ((computerScore % 2 == 0 || (computerScore > userScore)) && computerScore > 8) {
        const loseMessage = document.createElement("p");
        loseMessage.textContent = "You win!";
        loseMessage.classList.add("loseMessage");
        start_div.appendChild(loseMessage);
        document.querySelector('.finger.purple').classList.add('halo');

        buttons_div.innerHTML = "";

        const playAgainButton = document.createElement("button");
        playAgainButton.innerText = "Play Again";
        playAgainButton.classList.add("playAgainButton");
        playAgainButton.addEventListener("click", function () {

            location.reload();
        });
        start_div.appendChild(playAgainButton);
        return;
    }
}

function draw(userChoice, computerChoice) {
    userScore++;
    computerScore++;
    updateScore();
    userScore_el.textContent = userScore;
    computerScore_el.textContent = computerScore;
    if (((userScore === computerScore) && (userScore % 2 == 0)) && userScore > 8) {
        // Display "It's a draw" message
        const drawMessage = document.createElement("p");
        drawMessage.textContent = "It's a draw!";
        drawMessage.classList.add("drawMessage");
        start_div.appendChild(drawMessage);

        // Add "Play Again" button
        const playAgainButton = document.createElement("button");
        playAgainButton.innerText = "Play Again";
        playAgainButton.classList.add("playAgainButton");
        playAgainButton.addEventListener("click", function () {
            // Reload the page to play again
            location.reload();
        });
        start_div.appendChild(playAgainButton);
    }
}

function playgame(userChoice) {

    const computerChoice = computerAns();
    updateImages(userChoice, computerChoice);
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            winDecision(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            loseDecision(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
    }
}

function updateImages(userChoice, computerChoice) {
    console.log(userChoice, computerChoice)
    const computerFinger = document.querySelector(".finger.purple img");
    const userFinger = document.querySelector(".finger.blue img");


    switch (userChoice) {
        case "rock":
            userFinger.src = "../../assets/rock.png";
            break;
        case "paper":
            userFinger.src = "../../assets/paper.png";
            break;
        case "scissor":
            userFinger.src = "../../assets/scissor.png";
            break;
    }


    switch (computerChoice) {
        case "rock":
            computerFinger.src = "../../assets/rock.png";
            break;
        case "paper":
            computerFinger.src = "../../assets/paper.png";
            break;
        case "scissor":
            computerFinger.src = "../../assets/scissor.png";
            break;
    }
}


