let resultField = document.getElementById("result");
let memory = 0;

function appendValue(value) {
    resultField.value += value;
}

function clearScreen() {
    resultField.value = "";
}

function backspace() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculate() {
    try {
        resultField.value = eval(resultField.value);
    } catch {
        resultField.value = "Error";
    }
}

function calculateSqrt() {
    resultField.value = Math.sqrt(eval(resultField.value));
}

function calculatePower() {
    resultField.value = Math.pow(eval(resultField.value), 2);
}

function calculateSin() {
    resultField.value = Math.sin(toRadians(eval(resultField.value))).toFixed(5);
}

function calculateCos() {
    resultField.value = Math.cos(toRadians(eval(resultField.value))).toFixed(5);
}

function calculateTan() {
    resultField.value = Math.tan(toRadians(eval(resultField.value))).toFixed(5);
}

function calculateLog() {
    resultField.value = Math.log10(eval(resultField.value)).toFixed(5);
}

function calculateExp() {
    resultField.value = Math.exp(eval(resultField.value)).toFixed(5);
}

function calculatePi() {
    resultField.value = Math.PI.toFixed(5);
}

function calculateFactorial() {
    let num = parseInt(resultField.value);
    if (num < 0) {
        resultField.value = "Error";
    } else {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        resultField.value = fact;
    }
}

function toRadians(value) {
    return value * (Math.PI / 180);
}

function toDegrees(value) {
    return value * (180 / Math.PI);
}

function memoryStore() {
    memory = eval(resultField.value) || 0;
}

function memoryRecall() {
    resultField.value += memory;
}

function memoryClear() {
    memory = 0;
}