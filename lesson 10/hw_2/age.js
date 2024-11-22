
const ageInput = document.getElementById('ageInput');
const btn = document.getElementById('btn');
const message = document.getElementById('result-text');

btn.addEventListener('click', () => {
    const age = Number(ageInput.value);
        if (age < 18){
            message.textContent = 'Вам немає 18 років!';

        }else {
            message.textContent = 'Ви досягли повноліття!';
        }
    });