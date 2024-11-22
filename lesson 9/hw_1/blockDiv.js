const blockDiv = document.createElement('div')
blockDiv.classList.add('wrap');
blockDiv.classList.add('collapse');
blockDiv.classList.add('alpha');
blockDiv.classList.add('beta');


const cloneNodeDiv = blockDiv.cloneNode(true);
document.body.append(blockDiv, cloneNodeDiv);
