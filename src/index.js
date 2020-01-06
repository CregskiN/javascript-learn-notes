// 特定接口
class Adaptee {

    specificRequest() {
        return '德国标准插头'
    }
}


// 适配器
class Target {

    constructor() {
        // 初始化特定接口
        this.adaptee = new Adaptee();
    }

    request() {
        // 返回特定接口的实例 // 类似工厂模式
        let info = this.adaptee.specificRequest();
        return `${info} - 转换器 - 中国标准插头`
    }
}



// -- 测试 --
let target = new Target();
let res = target.request();
console.log(res);
