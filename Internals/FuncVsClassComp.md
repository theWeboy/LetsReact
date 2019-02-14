### When to use which type of components

#### Functional Components
- Traditionally in React, the functional components are the presentational components.
- These do not manipulate the state of the application.
- Only used for UI purposes hence are separated from the class based components for code maintainability.
- Now from **React 16.8** onwards, we can manipulate the state inside the functional components also by using **react hooks**.
- So, either we can use only functional components in our entire application as they can manipulate state as well, or we can follow the traditional
approach of separating class based and functional components as people may be using older versions of react.

#### Class based components
- When we need to manage/manipulate state we can always use class based components. Components that can manipulate state are also called
conotainer components.
- However we should have very few class based components as compared to the functional/presentational components so that our app does not show weird
behaviour and only a handful of components manage the state.

**Important** : The lifecycle methods can only be accessed int the class based components and not in the functional components.
