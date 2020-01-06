class LoginForm {
    constructor() {
        this.state = 'hide';
    }

    show() {
        if (this.state === 'show') {
            alert('已经显示');
            return;
        }

        this.state = 'show';
        console.log('登录框显示成功');

    }

    hide() {
        if (this.state === 'hide') {
            alert('已经隐藏');
            return;
        }
    }

}

LoginForm.getInstance = (() => {
    let instance = null;
    return () => {
        if (!instance) {
            instance = new LoginForm();
            console.log(instance);

        }
        return instance;
        // throw ('请勿重复创建实例！');
    }
})()

// --测试--
let login1 = LoginForm.getInstance();
login1.show();

login1.hide();

// let login2 = LoginForm.getInstance();