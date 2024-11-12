function foobar(users){
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)

    }
}
foobar([
    {id: 1, name:'chery', age: 25},
    {id: 2, name:'mary', age: 26},
    {id: 3, name:'kokos', age: 24},
    {id: 4, name:'aple', age: 22},
    {id: 5, name:'chery', age: 25},

])