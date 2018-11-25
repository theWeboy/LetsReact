# Reference and Primitive types in javascript

### Primitive types
Primitive types in javascript are `numbers`, `strings` and `booleans` . Whenever you reassign 
or store a variable in another variable, a new copy will be created of the assigned variable.

### Reference types
Reference types in javascript are `objects` and `arrays` . Unlike the primitive types, here
the object/array is stored in the memory and when assigning we store a `pointer` to that place
in the memory. So a new copy is not created only the reference of the variable is passed.

#### Example
```javascript
const person = {
  name: 'Deepak'
};

const secPerson = person;

person.name = 'Rick';

console.log(secPerson);
```

**Output**
```javascript
[object Object] {
  name: "Rick"
}
```

**Note** : 
Here we first assign the person object to `secPerson` and then mutate the `person` object, 
and then we log the `secPerson` object. Intuitively, `name` in `secPerson` should not change
but it changes because `objects` and `arrays` are reference types.

This can lead to unexpected behaviour. So to copy this in an immutable way, we can do
as follows:

```javascript
const person = {
  name: 'Deepak'
};

const secPerson = {
  ...person
};

person.name = 'Rick';

console.log(secPerson);
```

Here we use the `...` *spread* operator in javascript to copy the properties of the
`person` object inside the newly created `secPerson` object. Now the `name` in
`secPerson` will remain `Deepak` .




