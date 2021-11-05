let score1 = document.getElementById("score1") //Main Score Player 1
let currentone = document.getElementsByClassName("current1"); //Current Score Player 1
let p1message = document.getElementById("p1message") // win / lose / draw/ play again?


let diceimg = document.getElementById("diceimg") // Dice Image


let rollButton = document.getElementById("div4"); // Roll Dice Button
let newGame = document.getElementById("div6"); // New Game Button



let score = 0;



rollButton.addEventListener("click", () => {
    diceimg.style.display = "block";
    let num = Math.ceil(Math.random() * 6)

    if (num === 1 && score < 20) {
        diceimg.setAttribute("src", "images/dice1.png");
        score = 0;
        score1.style.display="none";
        currentone[0].style.display= "none";
        currentone[1].style.display= "none";
        p1message.innerText = "Game_Over";

    } else if (num === 2) {
        diceimg.setAttribute("src", "images/dice2.png");
        score += 2;
        currentone[0].innerText = score;
        score1.innerText = 2;

    } else if (num === 3) {
        diceimg.setAttribute("src", "images/dice3.png");
        score += 3;
        currentone[0].innerText = score;
        score1.innerText = 3;

    } else if (num === 4) {
        diceimg.setAttribute("src", "images/dice4.png");
        score += 4;
        currentone[0].innerText = score;
        score1.innerText = 4;

    } else if (num === 5) {
        diceimg.setAttribute("src", "images/dice5.png");
        score += 5;
        currentone[0].innerText = score;
        score1.innerText = 5;

    } else if (num === 6) {
        diceimg.setAttribute("src", "images/dice6.png");
        score += 6;
        currentone[0].innerText = score;
        score1.innerText = 6;
    }

    if (score >= 21) {

        p1message.innerText = "YOU_WIN!";
        currentone[0].style.display= "none";
        currentone[1].style.display= "none";
        score1.innerText = score;
    }
});


newGame.addEventListener("click", () => {
    diceimg.style.display = "none";
    score1.style.display="block";
    currentone[0].style.display= "block";
    currentone[1].style.display= "block";
    
    score = 0
    currentone[0].innerText = score;
    score1.innerText = score;
    p1message.innerText = "";

})