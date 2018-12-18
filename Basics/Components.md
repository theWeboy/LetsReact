# Components basics

- There is one root component typically named `App` . All the other components are nested inside this root component.
- There is only one root component.
- When defining a component we have to always `import` `React` and the `Component` class to render the component to the DOM.
- The `React` imported performs the function of compiling the JSX code returned by the component class.
- **Every component has to `render` or `return` some JSX code which can be rendered to the DOM to the screen.**


### Syntax

```javascript
class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hi, This is a React App</h1>
      </div>
    );
  } 
}

export default App;
```

**Note :** It is a good practice to nest all the JSX code inside one root `div` for consistency. As we would want to have similar style for the whole component using the root div's class.  

Also it is a convention to start the component file name with capital first letter and the name should be same as the name of the component. Reason behind this is that in react all the keywords starting with lowercase letters are reserved for JSX tags like `<h1>` `<p>` etc. So we use first character Upper case to avoid errors.

## Creating a functional Component

```javascript
import React from 'react';

const person = () => {
  return <p>I am a Person!</p>
};

export default person;
```
