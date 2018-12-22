# Working with conditionals

### Using the ternary operator
- In the JSX code we can use ternary operator `?` to render the JSX according to some condition that may be true or false.
- However, we cannot use the `if-else` statements inside the JSX code (inside `{}` braces).
- Inside the `{}` braces we can only execute single line javascript and not blocks of javascript code like loops or if-else statements.
- This is **not** a recommended way of working with conditionals.
- Can be used in small use cases and should be avoided for large/complex use cases as the code will get messy and will be prone to errors.

### Using normal if-else syntax before return method
- We can declare variables and other normal Javascript code like loops,if-else statements etc. before the `return` method inside the `render` method.
- Here, we are not interfering with the JSX code and hence can write complex Javascript code.
- This is a cleaner and recommended way of working with conditionals.
