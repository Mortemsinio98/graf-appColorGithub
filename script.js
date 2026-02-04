const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorPicker = document.getElementById("colorPicker");
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");

function clamp(value) {
    return Math.max(0, Math.min(255, value));
}

function rgbToHex(r, g, b) {
    return (
        "#" +
        Number(r).toString(16).padStart(2, "0") +
        Number(g).toString(16).padStart(2, "0") +
        Number(b).toString(16).padStart(2, "0")
    ).toUpperCase();
}

function hexToRgb(hex) {
    return {
        r: parseInt(hex.substring(1, 3), 16),
        g: parseInt(hex.substring(3, 5), 16),
        b: parseInt(hex.substring(5, 7), 16),
    };
}

function updateColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;

    const hex = rgbToHex(r, g, b);

    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex;
    colorPicker.value = hex;
}

function updateFromSliders() {
    redInput.value = red.value;
    greenInput.value = green.value;
    blueInput.value = blue.value;
    updateColor();
}

function updateFromInputs() {
    red.value = clamp(redInput.value);
    green.value = clamp(greenInput.value);
    blue.value = clamp(blueInput.value);
    updateColor();
}

function updateFromPicker() {
    const rgb = hexToRgb(colorPicker.value);

    red.value = rgb.r;
    green.value = rgb.g;
    blue.value = rgb.b;

    redInput.value = rgb.r;
    greenInput.value = rgb.g;
    blueInput.value = rgb.b;

    updateColor();
}

/* Eventos */
red.addEventListener("input", updateFromSliders);
green.addEventListener("input", updateFromSliders);
blue.addEventListener("input", updateFromSliders);

redInput.addEventListener("input", updateFromInputs);
greenInput.addEventListener("input", updateFromInputs);
blueInput.addEventListener("input", updateFromInputs);

colorPicker.addEventListener("input", updateFromPicker);

/* Inicialización */
updateFromSliders();
