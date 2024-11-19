class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age =age;
        this.footSize = footSize;
    }
}
class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age =age;
        this.shoe =shoe;
    }
}
const  cinderellas = [
    new Cinderella( 'Bell','18', '34'),
    new Cinderella( 'Ariel','16', '32'),
    new Cinderella( 'Jasmine','20', '36'),
    new Cinderella( 'Snow White','21', '37'),
    new Cinderella( 'Aurora','22', '40'),
    new Cinderella( 'Cofi','25', '30'),
    new Cinderella( 'Anna','20', '31'),
    new Cinderella( 'Carol','18', '38'),
    new Cinderella( 'Pocahontas','17', '35'),
    new Cinderella( 'Lina','18', '33')
];
const prince = new Prince('Devid', '27', '36');

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.shoe );
prince.love = cinderellaMain;

console.log(cinderellaMain)