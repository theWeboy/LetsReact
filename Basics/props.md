# Props and outputting dynamic content

- Components are resuable and *configurable*, i.e. , we can add attributes to our component from the outside and in the component file we 
can configure the component code to recognize the attributes using `props`. 
- `props` is an argument in the component function which is used to map the attributes of the component. 
- We use components like custom HTML elements from the outside and like any other HTML element we can supply custom attributes like "name" , 
"age" etc. 

### Example

**In the component file**

```javascript
import React from 'react';

const person = (props) => {
  return <p>I am {props.name} and I am {props.age} years old!</p>
};

export default person;
```

**In the root component file (App.js)**

```javascript
import Person from './Person/Person';
class App extends Component{
  ...
    <Person name="Deepak" age="21" />
    <Person name="Raghav" age="22">My Hobbies: Cycling</Person>
    <Person name="Manish" age="20" />
  ...

}
```

**NOTE:** In the above code, for Person with name "Raghav" the inline text (My hobbies...) of the component will not be displayed. To display this content we have to use `props.children` property in the component file.
