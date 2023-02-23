- 对象都有 __proto__ 属性，构造函数都有 prototype 属性
- 对象的 __proto__ 都指向 构造函数的 prototype 属性
```JavaScript
function Person () {}
let p1 = new Person()
let p2 = new Person()

p1.__proto__ === Person.prototype // true
p2.__proto__ === Person.prototype // true
```

- 原型也是对象，也有 __proto__属性，指向 构造函数的 prototype 属性
```JavaScript

```

