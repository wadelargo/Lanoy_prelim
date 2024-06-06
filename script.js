const data = [];

function addItem() {
    let message;
    do {
        message = prompt("Enter a number");
    } while (!isValidNumber(message));
    
    data.push(Number(message)); 
    renderData();
    updateStatistics();
}

function isValidNumber(input) {
    return /^-?\d+$/.test(input);
}

function renderData() {
    let ul = document.getElementById("list");
    ul.innerHTML = "";

    data.forEach((number, index) => {
        let li = document.createElement("li");
        li.innerText = number;

        ul.append(li);
    });
}

function updateStatistics() {
    const ul = document.getElementById("list");
    const sumElement = document.getElementById("sum");
    const averageElement = document.getElementById("average");
    const highestElement = document.getElementById("highest");
    const lowestElement = document.getElementById("lowest");

    if (data.length === 0) {
        sumElement.innerText = "N/A";
        averageElement.innerText = "N/A";
        highestElement.innerText = "N/A";
        lowestElement.innerText = "N/A";
        return;
    }

    const numbers = Array.from(ul.children).map(li => parseFloat(li.innerText));

    const sum = numbers.reduce((acc, current) => acc + current, 0);
    const average = sum / numbers.length;
    const highest = Math.max(...numbers);
    const lowest = Math.min(...numbers);

    sumElement.innerText = sum.toFixed(2);
    averageElement.innerText = average.toFixed(2);
    highestElement.innerText = highest.toFixed(2);
    lowestElement.innerText = lowest.toFixed(2);
}