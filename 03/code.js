/*
Functions:
- They can be created via literals
- They can be assigned to variables, arrays and properties of objects
- They can be passed as parameters to functions
- They can be returned as results from functions
- They can have properties


Events:
- Browsers events
- Network events, ajax
- User events, mouse clicks, mouse moves, keypresses
- Timer events
*/
window.onload = function () {
    /* this code is executed only when the browser finishes loading the page and fires a 'load' event. */
    console.log('load event!');
}


/*
To accomplish the same result there's another way, using the body tag in HTML. But this way is to avoid, cause it's to prefer Unobtrousive Javascript. This principle is similar to the one in the Clean Code. the things that a class depends should be coherent, should be of the same type. So in the HTML should only be markup of the content, in the Javascript the code (behavior) and in the CSS style.
*/
<body onload='onLoad()'></body>
...
var onLoad = function(){
}