# Classes in Javascript
The concept of classes in javascript is similar to OO concepts in other programming languages. 
The javascript classes are blueprints of javascript objects.
Class is instantiated with `new` keyword just like constructor functions.
Classes in javascript support inheritance.

### Example
```javascript
class Human{
  constructor(){
    this.gender = 'male';
  }
  printGender(){
    console.log(this.gender);
  }
}

class Person extends Human{
  constructor(){
    super();      // Note.
    this.name = 'Deepak';
  }
  printName(){
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printGender();

```
**Output**
```
"Deepak"
"male"
```
### Note
We must call the `super` constructor (constructor of the super class) inside the
constructor of the derived class to initialize the super/parent class. Omitting this will
result in a `ReferenceError` .

## Modern approach for defining properties and methods
We can use the following direct syntax for defining variables and functions inside a class.
Arrow functions are used as there is no `this` binding and syntax is shorter. Also we don't
have to use the constructor.
```
myProperty = 'value'
mymethod = () => {...}
```
