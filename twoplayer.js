let score1 = document.getElementById("score1"); //Main Score Player 1
let score2 = document.getElementById("score2"); //Main Score Player 2
let currentone = document.getElementsByClassName("current1"); //Current Score Player 1
let currenttwo = document.getElementsByClassName("current2"); //If statement condition to determine turns. 
let p1message = document.getElementById("p1message"); // win / lose / draw/ play again?
let p2message = document.getElementById("p2message");



let diceimg = document.getElementById("diceimg"); // Dice Image
let tink = document.getElementById("tink");
tink.volume = 0.5;


let rollButton = document.getElementById("div4"); // Roll Dice Button
let hold = document.getElementById("div5"); // Hold Button
let newGame = document.getElementById("div6"); // New Game Button

let newgame = document.getElementsByClassName("newgame"); // display = "none". change this by pressing newGame Button
let change = document.getElementsByClassName("change");
let imagebox = document.getElementById("diceimgbox"); //dice box effect
let score = 0;
let highscore = 0;



    imagebox.style.display = "none"

newGame.addEventListener("click", () => {
    imagebox.style.display = "none"
    tink.play();

    for (var i = 0; i < 4; i++) {
        newgame[i].style.display = "block";
    }

    for (var i = 0; i < change.length; i++) {
        change[i].style.display = "none";
    }

    diceimg.style.display = "none";
    p1message.innerText = "";
    p2message.innerText = "";

    score = 0
    currentone[0].innerText = score;
    score1.innerText = score;
    currenttwo[0].innerText = score;
    score2.innerText = score;

})





rollButton.addEventListener("click", () => {
    tink.play();
    diceimg.style.display = "block";
    imagebox.style.display = "block";
    let num = Math.ceil(Math.random() * 6)

    if (num === 1 && score < 20) {
        diceimg.setAttribute("src", "images/dice1.png");
        score = 0;
        if (change[0].style.display == "none") {
            score1.style.display = "none";
            currentone[0].style.display = "none";
            currentone[1].style.display = "none";
            p1message.innerText = "Game_Over";
            p2message.style.display = "block";
            p2message.innerText = "You_Win!"
        } else {
            score2.style.display = "none";
            currenttwo[0].style.display = "none";
            currenttwo[1].style.display = "none";
            p2message.innerText = "Game_Over";
            p1message.style.display = "block";
            p1message.innerText = "You_Win!"
        }


    } else if (num === 2) {
        diceimg.setAttribute("src", "images/dice2.png");
        score += 2;
        if (change[0].style.display == "none") {
            currentone[0].innerText = score;
            score1.innerText = 2;
        } else {
            currenttwo[0].innerText = score;
            score2.innerText = 2;
        }


    } else if (num === 3) {
        diceimg.setAttribute("src", "images/dice3.png");
        score += 3;
        if (change[0].style.display == "none") {
            currentone[0].innerText = score;
            score1.innerText = 3;
        } else {
            currenttwo[0].innerText = score;
            score2.innerText = 3;
        }


    } else if (num === 4) {
        diceimg.setAttribute("src", "images/dice4.png");
        score += 4;
        if (change[0].style.display == "none") {
            currentone[0].innerText = score;
            score1.innerText = 4;
        } else {
            currenttwo[0].innerText = score;
            score2.innerText = 4;
        }


    } else if (num === 5) {
        diceimg.setAttribute("src", "images/dice5.png");
        score += 5;
        if (change[0].style.display == "none") {
            currentone[0].innerText = score;
            score1.innerText = 5;
        } else {
            currenttwo[0].innerText = score;
            score2.innerText = 5;
        }


    } else if (num === 6) {
        diceimg.setAttribute("src", "images/dice6.png");
        score += 6;
        if (change[0].style.display == "none") {
            currentone[0].innerText = score;
            score1.innerText = 6;
        } else {
            currenttwo[0].innerText = score;
            score2.innerText = 6;
        }

    }


    if (score >= 21) {

        if (change[0].style.display == "none") {
            p1message.innerText = "YOU_WIN!";
            currentone[0].style.display = "none";
            currentone[1].style.display = "none";
            score1.innerText = score;
        } else {
            p2message.innerText = "YOU_WIN!";
            currenttwo[0].style.display = "none";
            currenttwo[1].style.display = "none";
            score2.innerText = score;
        }



    }
});





hold.addEventListener("click", () => {
    tink.play();
    diceimg.style.display = "none";
    imagebox.style.display = "none";
    currentone[0].style.display = "none";
    currentone[1].style.display = "none";
    highscore = score;
    score1.innerText = highscore;
    score = 0;

    for (var i = 0; i < change.length; i++) {
        change[i].style.display = "block";
    }
})