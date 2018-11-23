# Arrow Functions

### Syntax

```
const foo = () => {
  ...
}

```

### Key Features
* Shorter syntax.
* When using `this` inside an arrow func, it will always keep its context and not change
it surprisingly during run time.

### Example

First, we create a normal constructor function and create an instance of it. With a constructor function, the value of `this` *should be* bound to the new object being created.
In this case, that’s the `b` object. We want to increase the value of `b.num` every second. To do this, we can use the built in `setInterval()` function. `setInterval()` is a function that calls another function, repeatedly, after a set number of milliseconds.

```
function Counter() {
  this.num = 0;
  this.timer = setInterval(function add() {
    this.num++;
    console.log(this.num);
  }, 1000);
}
var b = new Counter();
```
##### Output
```
NaN
NaN
NaN
...
```
This happened because our `setInterval` function isn’t being called on a declared object. 
It also isn’t being called with the `new` keyword (only the `Counter()` function is). 
And lastly, we’re not using `call`, `bind`, or `apply`. `setInterval`is just a normal function. 
Because none of these rules apply, the value of `this` in `setInterval` is bound to the **global object**!<br/>

How do we fix this? **Arrow Functions**. Arrow functions don’t bind `this`. 
The `this` is bound **lexically**. By using an arrow function here, we would allow `this` to keep it’s original binding.

```
function Counter() {
  this.num = 0;
  this.timer = setInterval(() => {
      this.num++;
      console.log(this.num);
    }, 1000);
}
```
```
var d = new Counter();
// 1
// 2
// 3
// ...
```
The console logs increasing number each second. The original binding created by the `Counter` constructor function has been preserved. 
Inside the `setInterval()` function, `this` is now being bound to our newly created d object!

