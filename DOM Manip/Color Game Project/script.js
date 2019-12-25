var bodybgcolor = document.body.style.backgroundColor;
var numSquares = 6;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

var colorList;
var correctColor;

init();

function init() {
    resetButton.addEventListener("click", reset);
    setupModeButtons(); 
    setupSquares();  
    reset();
}

function setupModeButtons() {
    modeBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            modeBtns.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
            setNumSquaresFrom(this.textContent);
            reset();
        });
    });
}

function setupSquares() {
    squares.forEach(square => {
        square.addEventListener("click", function() {
            if (this.style.backgroundColor === correctColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(correctColor);
                h1.style.backgroundColor = correctColor;
                resetButton.textContent = "Play again?";
            } else {
                messageDisplay.textContent = "Try Again!";
                this.style.backgroundColor = bodybgcolor;
            }
        });
    });
}

function setNumSquaresFrom(mode) {
    if(mode === "Easy")
        numSquares = 3;
    else if(mode === "Hard")
        numSquares = 6;
    else
        numSquares = 9;
}

function reset() {
    colorList = generateColorList(numSquares);
    correctColor = pickRandomColor();
    colorDisplay.textContent = correctColor.toUpperCase();
    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = bodybgcolor;
    squares.forEach((square, i) => {
        if(colorList[i]) {
            square.style.display = "block";
            square.style.backgroundColor = colorList[i]
        }
        else {
            square.style.display = "none";
        }
    });
}

function changeColors(color) {
    squares.forEach(square => {
        square.style.backgroundColor = color;
    });
}

function pickRandomColor() {
    let index = Math.floor(Math.random() * colorList.length);
    return colorList[index];
}

function generateColorList(count) {
    let colors = [];
    for(let i=0; i<count; i++) {
        colors.push(randomColor());
    }
    return colors;
}

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}