const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const toggleButton = document.querySelector(".theme-toggle");
const calculatorEl = document.querySelector(".calculator");

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }

    catch(error) {
        display.value = "Error";
    }
} 

let isBgColorBlack = true;

function switchTheme() {
    calculatorEl.style.backgroundColor = isBgColorBlack ? "white" : "black";
    toggleButton.style.backgroundColor = isBgColorBlack ? "grey" : "white";

    isBgColorBlack = !isBgColorBlack
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.textContent === "C") {
            clearDisplay();
        }
        else if (btn.textContent === "=") {
            calculate();
        }
        else {
            display.value += btn.textContent;
        }
    }) 
});

toggleButton.addEventListener("click", switchTheme) 

