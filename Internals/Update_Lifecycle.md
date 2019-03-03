## Component Update Lifecycle

### For props changes
1. getDerivedStateFromProps(props,state)
2. shouldComponentUpdate(nextProps,nextState)
3. render()
4. Update child components
5. getSnapshotBeforeUpdate(prevProps,prevState)
6. componentDidUpdate()

### For state changes
- Lifecycle methods are same as above.
- Used in the main App.js file where the state gets updated.

### Important
- `componentDidMount()`,`componentDidUpdate()` and `shouldComponentUpdate(nextProps,nextState)` are the most useful and often used lifecycle methods.
- As the former 2 methods are used when we want to make http requests, etc.
- The latter is very useful in optimizations. We can use this method to cancel the update if there is no relevant change in the state or props
in the component. This saves us from unnecessary re-rendering of DOM.
