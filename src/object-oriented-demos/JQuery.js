

class jQuery {

    constructor(selector) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector)); // call传入数组
        let len = dom ? dom.length : 0;
        for (let i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || '';

    }
    append(node) {

    }
    addClass(name) {

    }
    html(data) {
    }

    // 省略N个API
}

window.$ = function (selector) {
    // 工厂模式
    // 返回创建好的实例
    return new jQuery(selector);
}

// 测试
var $p = $('p');
console.log($p);
console.log($p.addClass)
