

// // 存储实例
// class InstanceStorage {
//     constructor(instance) {
//         this.instance = instance;
//     }
// }


// 创建单例
class SingleObject {

   login(){
       console.log('login...');
   }

}

SingleObject.getInstance = (() => {
    let instance = null;
    return ()=>{
        if(!instance){
            instance = new SingleObject();
            return instance;
        }
        throw ('请勿重复创建实例！');
    }
})()


module.exports = {
    SingleObject
}

// --可在index.js测试--

// const { SingleObject } = require('./design-patterns-notes/SingleObject');

// const obj1 = SingleObject.getInstance()
// obj1.login()

// const obj2 = SingleObject.getInstance()
// obj2.login()