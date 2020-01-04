class Car {
    constructor(carNumber, carName) {
        this.carNumber = carNumber; // 车牌号
        this.carName = carName; // 车名称
    }
}

// 快车
class ExpressCar extends Car {
    constructor(carNumber, carName) {
        super(carNumber, carName);
        this.unitPrice = 1; // 里程单价
    }
}

// 专车
class PrivateCar extends Car {
    constructor(carNumber, carName) {
        super(carNumber, carName);
        this.unitPrice = 2; // 里程单价
    }
}

// 行程
class Trip {

    constructor(car) {
        this.car = car;
        this.startTime;
        this.endTime;
    }

    start() {
        this.startTime = new Date();
        console.log(`行程开始： 车名：${this.car.carName} , 车牌号:${this.car.carNumber} --${this.startTime}`);
    }

    end() {
        this.endTime = new Date();
        console.log(`行程结束，金额：${this.car.unitPrice * 5} --${this.endTime}`);
    }
}

// 测试
const car = new ExpressCar(100, '桑塔纳');
const trip = new Trip(car);
trip.start();
trip.end();