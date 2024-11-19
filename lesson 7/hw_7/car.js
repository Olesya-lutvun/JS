class Car  {
    constructor (model, manufacturer, year, maxSpeed,  enginevolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.enginevolume = enginevolume;
    }

        drive (){
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`)
        };

        info (){
            for (const key in this)
                console.log(key, this[key])
        };
       increaseMaxSpeed (newSpeed){
            if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed
        };
        changeYear (newYear){
            if (newYear > 0) this.year = newYear
        };
       addDriver (driver){
            if (driver) this.driver = driver
        };
}

    const car = new Car ('Ford', 'Fordmotors', '2015', '215', '220');
    console.log(car);

    car.drive();
    car.info ();
    car.increaseMaxSpeed(180);
    car.changeYear(2022);
    car.addDriver ('Alan');
    console.log(car);
