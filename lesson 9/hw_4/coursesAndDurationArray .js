////За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
///Завдання робити через цикли.


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const courses of coursesAndDurationArray) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = courses.title;
    const p = document.createElement('p');
    p.innerText = courses.monthDuration;

    div.append(h2, p);

document.body.append(div);
}