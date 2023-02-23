## 类的由来
JavaScript 语言中，生成实例对象的传统方式是通过构造函数。
```JavaScript
function Point(x, y){
    this.x = x
    this.y = y
}

Point.prototype.toString = function() {
    return '(' + this.x + ',' + this.y + ')'
}

var p = new Point(1, 2)
```

ES6提供了更接近传统语言的写法，引入 Class(类) 这个概念。事实上，class 可以看作只是一个语法糖。
```JavaScript
class Point {
    // constructor=构造方法  this=实例对象
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')'
    }
}

typeof Point // "function"

var p = new Point(1, 2)
```
## class 基本使用

```JavaScript
class Father {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayName() {
        console.log(this.name)
    }

    fatherAge() {
        console.log(this.age)
    }
}

class Child extends Father{
    constructor(name, age){
        super()
        this.name = name
        this.age = age
    }

    childAge() {
        console.log(this.age)
    }
}
```

静态方法：通过类来调用

## class 扩展