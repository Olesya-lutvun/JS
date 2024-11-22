const table = document.getElementById('table');
const tableFormGeneration = document.forms['tableFormGeneration'];

tableFormGeneration.onsubmit = function (e){
    table.innerText = '';
    e.preventDefault();

const linesValue = +tableFormGeneration.lines.value;
const cellsValue = +tableFormGeneration.cells.value;
const infoValue = tableFormGeneration.info.value;
console.log( linesValue, cellsValue, infoValue);

    for (let i = 0 ; i < linesValue; i++) {
        const tr = document.createElement('tr')
        for (let j= 0; j < cellsValue; j++ ){
            const td = document.createElement('td')
            td.innerText = infoValue;
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }

}