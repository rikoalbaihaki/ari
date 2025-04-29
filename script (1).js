
function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearEntry() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    const historyList = document.getElementById('history-list');
    try {
        let expression = display.value;

        // Ubah persen: 20%200000 jadi (20/100)*200000
        expression = expression.replace(/(\d+(\.\d+)?)%(\d+(\.\d+)?)/g, '($1/100)*$3');

        // Kalau ada angka tunggal lalu %, misal 20%, jadikan 20/100
        expression = expression.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

        let result = eval(expression);

        display.value = result;

        const historyItem = document.createElement('li');
        historyItem.textContent = `${expression.replace(/\//g, '÷').replace(/\*/g, '×')} = ${result}`;
        historyList.prepend(historyItem);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateCos() {
    const display = document.getElementById('display');
    const historyList = document.getElementById('history-list');
    try {
        const degrees = parseFloat(display.value);
        const radians = degrees * (Math.PI / 180);
        const result = Math.cos(radians);

        display.value = result;

        const historyItem = document.createElement('li');
        historyItem.textContent = `cos(${degrees}) = ${result}`;
        historyList.prepend(historyItem);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearHistory() {
    document.getElementById('history-list').innerHTML = '';
}
