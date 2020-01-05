// 第 二 题 
// 某 停 车 场 ， 分 3 层 ， 每 层 100 车 位 
// 每 个 车 位 都 能 监 控 到 车 辆 的 驶 入 和 离 开 
// 车 辆 进 入 前 ， 显 示 每 层 的 空 余 车 位 数 量 
// 车 辆 进 入 时 ， 摄 像 头 可 识 另 刂 车 牌 号 和 时 间 
// 车 辆 出 来 时 ， 出 口 显 示 器 显 示 车 牌 号 和 停 车 时 长 

// 车辆
class Car {
    constructor(carNumber) {
        this.carNumber = carNumber;
    }
}


// 摄像头
class Camera {

    shot(car) {
        return {
            carNumber: car.carNumber,
            inTime: Date.now()
        }
    }
}

// 出口显示屏
class Screen {

    show(car, inTime) {
        const currentTime = Date.now();
        console.log('车牌号', car.carNumber);
        console.log('停车时长', parseInt(currentTime + 400 - inTime));
    }
}

// 停车场
class Park {
    constructor(floors) {
        this.floors = floors || [];
        this.camera = new Camera();
        this.screen = new Screen();

        this.carList = {} // 存储摄像头拍摄返回的车辆信息
    }

    in(car) {
        // 通过摄像头获取信息
        const info = this.camera.shot(car);
        // 停到某个车位
        const i = parseInt(Math.random() * 100 % 100);
        const place = this.floors[0].places[i];
        place.in();
        info.place = place;
        // 记录信息
        this.carList[car.carNumber] = info;
    }

    out(car) {
        // 获取信息
        const info = this.carList[car.carNumber];
        // 将停车位清空
        const place = info.place;
        place.out();
        // 显示时间
        this.screen.show(car, info.inTime);
        // 清空记录
        delete this.carList[car.carNumber]
    }

    emptyNum() {
        return this.floors.map((floor, index) => {
            return `第 ${floor.index} 层 还有 ${floor.emptyPlaceNum()} 个空闲车位`
        }).join('\n');
    }
}

// 层
class Floor {
    constructor(index, places) {
        this.index = index; // 层数
        this.places = places || []; // 车位编号
    }

    emptyPlaceNum() {
        let num = 0;
        this.places.forEach((place) => {
            if (place.empty) {
                num = num + 1;
            }
        })
        return num;
    }
}

// 车位
class Place {
    constructor() {
        this.empty = true;
    }

    in() {
        this.empty = false;
    }

    out() {
        this.empty = true;
    }
}

// 测试 ---------
// 初始化停车场
const floors = [];
for (let i = 0; i < 3; i++) {
    const places = [];
    for (let j = 0; j < 100; j++) {
        places[j] = new Place();
    }
    floors[i] = new Floor(i + 1, places);
}
const park = new Park(floors);

// 初始化车辆
const car1 = new Car(100);
const car2 = new Car(200);
const car3 = new Car(300);


console.log('第一辆车进入');
console.log(park.emptyNum());
park.in(car1);

console.log('第二辆车进入');
console.log(park.emptyNum());
park.in(car2);

console.log('第一辆车离开');
park.out(car1);

console.log('第二辆车离开');
park.out(car2);

console.log('第三辆车进入');
console.log(park.emptyNum());
park.in(car3);

console.log('第三辆车离开');
park.out(car3);

