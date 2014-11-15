#Garbage Collector + Closure

In this document I'm going to analyze a base concept of the Garbage Collector in the browsers combined with a feature available with JavaScript, the closure. Some features that is good to know, particularly usefull with Single-Page Applications, where an entire page usually has to live for a long time and, maybe, with limited HW resources.

To start just follow the next steps.

###Check the code
Open the following [web page](testClosureGC.html). In the Developer Tools of the browser you will see a very simple html document.

```
<html>
<body>
    <script>
        var keepWithClosure = (function () {
            
            var largeObject = new Array(1000000).join('huge ');
            
            return function functionWithClosure() {
                return largeObject;
            };
            
        })();

        var clean = function () {
            keepWithClosure = null;
        }
    </script>
    
    <button onclick="clean()">Clear Reference</button>
    
</body>
</html>
```
There is only a little script and a button element inside the body.

The script declares two functions: `keepWithClosure` and `clean`.

- The `clean` function is binded at the `onclick` event of the button. When invoked it just set to null the variable `keepWithClosure`.

- The `keepwithClosure` references `functionWithClosure`. The anonimous function executed immediately return that function and declares an object `largeObject`. This big object is just a huge string.

###Using the [lente di ingrandimento]
Inside the Developeer Tools of the browser go to Profiles and take a 