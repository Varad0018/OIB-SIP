function convertTemp() {
    const tempInput = document.getElementById("temperature").value;
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const result = document.getElementById("result");

    if (tempInput === "" || isNaN(tempInput)) {
        result.textContent = "Please enter a valid number";
        return;
    }

    let temp = parseFloat(tempInput);
    let converted;

    if (from === "C") {
        if (to === "F") converted = (temp * 9 / 5) + 32;
        else if (to === "K") converted = temp + 273.15;
        else converted = temp;
    }

    if (from === "F") {
        if (to === "C") converted = (temp - 32) * 5 / 9;
        else if (to === "K") converted = (temp - 32) * 5 / 9 + 273.15;
        else converted = temp;
    }

    if (from === "K") {
        if (to === "C") converted = temp - 273.15;
        else if (to === "F") converted = (temp - 273.15) * 9 / 5 + 32;
        else converted = temp;
    }

    const displayValue = converted.toFixed(2);
    const unitLabel = to === "K" ? "K" : `°${to}`;

    result.textContent = `${displayValue} ${unitLabel}`;

    updateBackground(converted, to);
}

function updateBackground(value, unit) {
    let celsius;

    if (unit === "F") celsius = (value - 32) * 5 / 9;
    else if (unit === "K") celsius = value - 273.15;
    else celsius = value;

    if (celsius <= 5) {
        document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1482192596544-9eb780fc7f66')";
    } else if (celsius >= 30) {
        document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9')";
    } else {
        document.body.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429')";
    }
}
