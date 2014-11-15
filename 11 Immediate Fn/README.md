#Immediate Functions
In JavaScript you can use variables defined using closures. There are some cases where the results aren't as expected at a first look. Consider the following example.

#####Demo
`plunker demo wrong`

Let's look at the code. Given some buttons and a callback bind to the click event, when one of them is clicked then we expect to read its number. Let's start from the test, which is quite easy.

#####Test
```javascript
describe('Iteration', function () {

    it('should be out of range', function () {
        var button0 = document.createElement('button');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        var result;

        var badButtons = [button0,button1,button2];
        for (var index = 0; index < badButtons.length; index++) {
            badButtons[index].addEventListener('click', function () {
                result = index;
            });
        }

        var evObj = document.createEvent('Events');
        evObj.initEvent('click', true, false);
        button1.dispatchEvent(evObj);

        expect(result).not.toBe(1);
        expect(result).toBe(3);
    });
});
```
[Test Plunker](http://plnkr.co/edit/StDele?p=preview)

This becouse closures remember *references* not *values* at the moment they are used. But don't worry, there's a solution for this, we can use immediate functions.
Wait a minute, what is it?

explanation of immediate function in syntax
p.116

#####Test
`resolution of the test`
#####Demo
`demo`

#####Summary
`--- all tests and demo`