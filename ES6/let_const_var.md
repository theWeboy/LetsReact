# Different ways of creating variables in javascript

## var
Technically, javascript only knows `var` to create variables. 
Though with ES6 two different keywords were introduced : `let` and `const` . 
Best practice is to avoid using `var` and use `let` and `const` instead.

## let
It is used to create a variable whose value can change.
let variables are usually used when there is a limited use of those variables. 
Say, in for loops, while loops or inside the scope of if conditions etc. 
Basically, where ever the scope of the variable has to be limited.
`let` variables cannot be accessed in the window object because they cannot be globally accessed even if they are declared globally.

## const
It is used to create a variable to whom we assign a value once and never change.
The value of the `const` variable never changes.

### `let` vs `var`
`var` is scoped to the nearest function block and `let` is scoped to the nearest enclosing block, which can be smaller than a function block. Both are global if outside any block.
Also, variables declared with let are not accessible before they are declared in their enclosing block.
##### Visibility in a block
`let` is only visible in the `for()` loop and `var` is visible to the whole function.
```
function allyIlliterate() {
    //tuce is *not* visible out here

    for( let tuce = 0; tuce < 5; tuce++ ) {
        //tuce is only visible in here (and in the for() parentheses)
        //and there is a separate tuce variable for each iteration of the loop
    }

    //tuce is *not* visible out here
}

function byE40() {
    //nish *is* visible out here

    for( var nish = 0; nish < 5; nish++ ) {
        //nish is visible to the whole function
    }

    //nish *is* visible out here
}

```
##### Redeclaration
Assuming strict mode, `var` will let you re-declare the same variable in the same scope. On the other hand, `let` will not:
```
'use strict';
let me = 'foo';
let me = 'bar'; // SyntaxError: Identifier 'me' has already been declared

```
```
'use strict';
var me = 'foo';
var me = 'bar'; // No problem, `me` is replaced.

```
