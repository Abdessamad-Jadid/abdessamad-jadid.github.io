module.exports.drive = function() {
    console.log("The car moves forward");
    }
    module.exports.turn = function(degrees) {
    console.log(`The car turns ${degrees}`);
    }
    module.exports.break = function() {
    console.log("the car stops");
}

const car = require('./use_car_module');
car.drive();
car.turn(20);
car.break();