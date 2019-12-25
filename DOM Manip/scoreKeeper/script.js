var p1Button = document.querySelector("#p1Button")
var p2Button = document.querySelector("#p2Button")

var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var targetInput = document.querySelector("#targetInput");

var targetDisplay = document.querySelector("#targetDisplay");
var resetButton = document.querySelector("#reset")

var p1Score;
var p2Score;

var gameOver;
var winningScore;

resetAll();

p1Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if(p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.toggle("winner");
        }
    }
})

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if(p2Score === winningScore){
            gameOver = true;
            p2Display.classList.toggle("winner");
        }
    }
})

targetInput.addEventListener("change",function(){
    resetAll();
}) 

resetButton.addEventListener("click", resetAll)

function resetAll() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
    winningScore = Number(targetInput.value)
    targetDisplay.textContent = winningScore;
}