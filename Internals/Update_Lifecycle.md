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

### Important Lifecycle Methods
- `componentDidMount()`,`componentDidUpdate()` and `shouldComponentUpdate(nextProps,nextState)` are the most useful and often used lifecycle methods.
- As the former 2 methods are used when we want to make http requests, etc.
- The latter is very useful in optimizations. We can use this method to cancel the update if there is no relevant change in the state or props
in the component. This saves us from unnecessary re-rendering of DOM.

### Note
- `shouldComponentUpdate(nextProps,nextState)` is only available in class based components.
- For functional components we can use `React.memo()` to memoize the state of the component so that it only re-renders when the
changes takes place.
- This is the performance optimization for functional components.
- In exporting the functional component we wrap the component variable in the memo function, i.e , `export default React.memo(cockpit);`

### Important
- Instead of using `shouldComponentUpdate(nextProps,nextState)` methods we can use pure component base class from react which
allows us to execute the above lifecycle methods efficiently.
- In pure components there is an automatic shallow check for **all** the previous and current props of the component. This saves us from writing extra code.
- However, pure components should not be used everywhere as they may cause performance issues. Rendering may be faster than doing checks, and there may be a lot of wasted checks if big updates are common.
- See this [link](https://twitter.com/dan_abramov/status/759383530120110080?lang=en) from Dan Abramov, lead React developer regarding PureComponent.
