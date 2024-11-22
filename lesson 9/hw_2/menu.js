let list =['Main','Products','About us','Contacts']
const menu = document.createElement('ul');
menu.classList.add('menu');

for (const item of list) {
    const li = document.createElement('li');
    li.textContent = item;
    menu.appendChild(li);
}
document.body.append(menu);