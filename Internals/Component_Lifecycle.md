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
2. componentWillMount()
3. render()
4. Render Child Components
5. componentDidMount()

