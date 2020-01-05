// 工厂模式

class Product {

    constructor(name) {
        this.name = name;

    }

    init() {
        console.log('init');
    }

    fun1() {
        console.log('fun1');
    }

    func2() {
        console.log('fun2');
    }
}

class Creator {

    // 工厂模式
    // 返回创建好的实例
    create(name) {

        return new Product(name)
    }
}

//测试
let creator = new Creator();
let p = creator.create('p1');
p.init();
p.fun1();