Array.prototype.myForeEach = function (callback){
    const yourArray = this;
    for (const item of yourArray) {
        callback(item);
    }
};
[12,23,67].myForeEach((x) => console.log(x));




Array.prototype.myFilter = function (predicate){
    const arr =[];
    for (const item of this) {
if (predicate(item)){
    arr.push(item);
        }
    }
    return arr;
}
let users = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const result = users.myFilter ((user) => user.status);
console.log(result);









