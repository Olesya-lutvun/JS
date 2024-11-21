
class User {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

const usersArray = [
    new User('Ivan', ' 22', 10),
    new User('Ivan', ' 23', 18),
    new User('Ivan', ' 21', 17),
    new User('Ivan', ' 25', 25),
    new User('Ivan', ' 66', 36),
];
const idUser = usersArray.filter(user => user.id >=17);
Array.prototype.customFilter = function (predicate) {
    const result = [];

    for (const currentItem of this) {
        if (predicate(currentItem)) {
            result.push(currentItem);
        }
    }

    return result;
}
const idNumberUser = User.costomFilter(user => user.id >= 17);
console.log(idNumberUser);








////class User {
  ///  constructor(fName, lName, age) {
  //      this.firstName = fName;
 //       this.lastName = lName;
 //       this.age = age;
 //   }
//}

//const usersArray = [
 //   new User('Ivan', ' Boltun', 10),
 //   new User('Ivan', ' Boltun', 18),
 //   new User('Ivan', ' Boltun', 17),
 //   new User('Ivan', ' Boltun', 25),
 //   new User('Ivan', ' Boltun', 36),
//];
//const adultUsers = usersArray.filter(user => user.age >= 18);
//Array.prototype.customFilter = function (predicate) {
  //  const result = [];

  //  for (const currentItem of this) {
   //     if (predicate(currentItem)) {
       //     result.push(currentItem);
   //     }
   // }

  //  return result;
//}
//const adultUsersFilteredByOurCustomLogic = inputArray.customFilter(user => user.age >= 18);
//console.log('Native', adultUsers);
//console.log('Custom', adultUsersFilteredByOurCustomLogic);






inputArray.forEach((user) => {
    console.log(user);
});

Array.prototype.customForEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        callbackFn(this[i]);
    }
}

inputArray.customForEach((user) => {
    console.log(user);
});







