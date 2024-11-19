function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const user = new User('1', 'Oleg', 'Petrov', '123@gmail', '0990823251');
console.log(user);
let users  = [
    new User('2', 'Cat', 'Domchenko', '234@gmail.com','+830990546'),
    new User('3','Olya', 'Catery','345@gmail.com', '+380990839367'),
    new User('4', 'Car','Peten','89@gmail.com', '+380970829251'),
    new User('5', 'Anna', 'Lulu', 'jher@gmail.com', '+3809998543'),
    new User('6', 'Ken', 'Kens', 'ole@,com', '+38099874390'),
    new User('7', 'Cate', 'Sims', 'sims@gmail.com', '+380990493948'),
    new User('8', 'Barbi', 'Barbis', 'barbi@gmail.com', '+3890987437'),
    new User('9', 'Olen','Lusi', 'lusi@gmail.com','+38099584758'),
    new User('10', 'Pitr','Lui', 'fgd@gmail.com', '+3809983757'),
    new User('11', 'Lina', 'Dyti', '4rt2@gmail.com', '+44098675')
];
const filterFunction = (user) => user.id % 2 === 0;

const filterUsers = users.filter(filterFunction);
console.log(filterUsers);
