// 特定接口
class Adaptee {

    specificRequest() {
        return '德国标准插头'
    }
}


// 适配器
class Target {

    // 初始化特定实例
    constructor() {
        this.adaptee = new Adaptee();
    }

    // 类似工厂模式 
    // 工厂模式返回实例
    // 适配器模式 返回接口调用的结果
    request() {
        
        return this.adaptee.specificRequest();
    }
}



// -- 测试 --
let target = new Target();
let res = target.request();
console.log(`${res} - 转换器 - 中国标准插头`);
