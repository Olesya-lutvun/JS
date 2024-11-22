let currentNumber = +localStorage.getItem('number') || 100;
const lastUpdate = +localStorage.getItem('lastUpdate') || 0;
const currentTime = Date.now();
if (currentTime - lastUpdate > 10000) {
    currentNumber += 10;
    localStorage.setItem('number', currentNumber);
    localStorage.setItem('lastUpdate', currentTime);
}

document.getElementById('target').innerText = `${currentNumber}грн`;


