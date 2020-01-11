

// class Circle {
//     draw() {
//         console.log('画一个圆形');

//     }
// }

// class Decorator {
//     constructor(circle) {
//         this.circle = circle;
//     }

//     draw() {
//         this.circle.draw();
//         this.setRedBorder(circle);
//     }

//     setRedBorder(circle) {
//         console.log('设置红色边框');
//     }
// }

// // 测试代码
// let circle = new Circle();
// circle.draw(); // 装饰前画图

// let dec = new Decorator(circle);
// dec.draw(); // 装饰后画图 // 添加了一个setRedBorder方法

// -- 场景 ES7装饰器 --
// 方式 1
// @testDec
// class Demo{

// }

// function testDec(target) {
//     target.isDec = true;
// }

// alert(Demo.isDec);

//方式 2
// function testDec(isDec){
//     return (target) => {
//         target.isDec = isDec;
//     }
// }

// @testDec(false)
// class Demo{

// }

// console.log(Demo.isDec)

// 添加原型属性
// function mixins(...list){
//     return (target) => {
//         Object.assign(target.prototype, ...list);
//     }
// }

// // 待操作
// const Foo = {
//     foo() {
//         console.log('foo');
//     }
// }

// // 将Foo操作，后附着在MyClass原型上
// @mixins(Foo)
// class MyClass {

// }

// let obj = new MyClass();
// obj.foo()


// @TODO 只读失效
// function readonly(target, name, descriptor) {
//     descriptor.writable = false;
//     return descriptor;
// }

// class Person {
//     constructor() {
//         this.first = 'A';
//         this.last = 'B';
//     }

//     @readonly
//     name() {
//         return `${this.first} ${this.last}`;
//     }
// }

// let p = new Person();
// console.log(p.name());
// // p.name = function () {
// //     alert(100)
// // };



function log(target, name, descriptor) {
    let oldValue = descriptor.value;
    descriptor.value = function () {
        console.log(`calling ${name} width ${arguments}`);
        return oldValue.apply(this.atguments);
    }
}


class Math {
    @log
    add(a, b) {
        return a + b;
    }
}

let math = new Math();
const result = math.add(2, 4);

