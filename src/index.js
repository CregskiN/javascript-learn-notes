const { SingleObject } = require('./design-patterns-notes/SingleObject');

const obj1 = SingleObject.getInstance()
obj1.login()

const obj2 = SingleObject.getInstance()
obj2.login()