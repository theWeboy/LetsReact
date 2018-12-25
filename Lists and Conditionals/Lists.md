# Outputting Lists

To output an array in react render method, we need to map each element of the array to a JSX code which we want to render, so that react can just 
pull out JSX elements from the resultant array (after mapping) and render them

#### By using `map` methhod
- In react, we deal with lists like we do in normal javascript as everything in react is in fact javascript and nothing else! So, to map
elements of an array to JSX elements we use the `map` method of javscript arrays.
- For example, there is an array of objects having some properties. We can use the following syntax for mapping :-

```javascript
  {array.map( el => {
    return <Person
      name={el.name}
      age={el.age} />
  })}  
```

Here `el` is the input to the `map` function which in turn is the output of the `arrow function` , i.e , the arrow-function returns the
`Person` component and `el` stores this JSX for each object in the `array`.

### Important
- While manipulating arrays/objects one should remember that arrays and objects are reference types in javascript, meaning that assigning 
the old(original) array to the new array will simply assign the reference of the original array to the new array variable.
- Now if we manipulate the above new array, changes will reflect in the original array as well and if the original array affects the **state**
of the component in some manner then *it will lead to unusual behavior and bad apps*.
- So, the above is a bad practice to manipulate arrays and objects, instead we should always create a copy of the original array by using 
the `slice` method or the ES6 *spread operator* and then mutate the state by passing the new array.
- This is called *updating the state **immutably***. We should first manipulate the copy and then use `setState` on the mutated copy. 

#### `key` property
- In react it is important that a list/array has a `key` property for each of the array elements. 
- The key property should hold a unique value, a value that uniquely identifies the array element like an `id` or and `index`. 
- React maintains a virtual DOM which it uses to compare with the actual DOM for changes and for efficient rendering.
- This is beacuse this helps react to identifiy the changes which are made to the DOM through the `key` of the element and compare the changes to the older version and render the updated DOM. 
- This makes the app highly efficient and it is best practice to always have the `key` property for each array element.
