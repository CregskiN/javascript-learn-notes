// class People {
//     name;
//     age;
//     protected weight;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.weight = 120;
//     }

//     eat() {
//         console.log(`${this.name} eat something`);
//     }

//     speak() {
//         console.log(`My name is ${this.name}, age ${this.age}`);
//     }

// }

// class Student extends People {
//     number;
//     private girlfriend;
//     constructor(name, age, number) {
//         super(name, age);
//         this.number = number;
//         this.girlfriend = 'xiaoli';
//     }

//     study() {
//         console.log(`${this.name} study`);
//     }

//     getWeight() {
//         console.log(`${this.weight} study`);
//     }


// }

// let xiaoming = new Student('xiaoming', 10, 'A1');
// xiaoming.getWeight();
// xiaoming.study();
// // console.log(xiaoming.weight); // weight只能被Student及其子类使用

class People {
    constructor(name) {
        this.name = name;

    }

    saySomething() {

    }
}

class A extends People {
    constructor(name) {
        super(name);
    }

    saySomething() {
        console.log('i am A');
    }
}

class B extends People {
    constructor(name) {
        super(name);
    }

    saySomething() {
        console.log('i am B');
    }
}

let a = new A();
a.saySomething()
let b = new B();
b.saySomething()

