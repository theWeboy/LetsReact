# LifeCycle Hooks

### Component Lifecycle
- When React creates/instantiates a component for us, it runs
through multiple lifecycle phases.
- We can define methods which react will execute which allows us to run some code
during some of these lifecycle phases.
- These can **only** be defined in **stateful components**.

### Component Creation Lifecycle
The following is the order of methods during component creation :-
1. constructor(props)
2. componentWillMount() => used in older versions of react
2. getDerivedStateFromProps(props,state) => added in React 16.3
3. render()
4. Render Child Components
5. componentDidMount()

#### constructor(props)
- We can omit to use this explicitly as react will automatically create the constructor if it is not defined.
- If defined explicitly, we must call `super(props)` method in the constructor.
- Traditionally, we define/inititialize the state inside the constructor, by using `this.state = {..}` and not `this.setState = {..}`.

#### getDerivedStateFromProps(props,state)
- This is a static method and `static` keyword is mandatory for defining this method.
- This method should return updated state.

#### render()
- The main function of this function is to render the JSX code.
- Refrain from causing side effects like making http requests etc as that may cause re-rendering and will cause performance issues.

#### componentDidMount()
- This is called when the main component as well as its child components are successfully rendered.
- Here we can cause side effects like HTTP requests, etc.
