describe('Function differentiate by arguments type', function () {
    function Fizz() {
        this.sayFizz = function () {
            return 'Fizz';
        };
    }

    function Baz() {
        this.sayBaz = function () {
            return 'Baz';
        };
    }

    function Buzz() {}
    Buzz.prototype = new Baz();
    Buzz.prototype.sayBuzz = function () {
        return 'Buzz';
    };

    var obj = {};
    beforeEach(function () {

        HAPPIYfier(obj, 'sut')
            .define(
                [Fizz],
                function (fizz) {
                    return 'Hi ' + fizz.sayFizz();
                })
            .define(
                [Baz],
                function (baz) {
                    return 'Ciao ' + baz.sayBaz();
                })
            .define(
                [Buzz],
                function (buzz) {
                    return 'Yo ' + buzz.sayBuzz() + '!';
                })
            .define(
                [Fizz, Baz],
                function (fizz, baz) {
                    return 'Hi ' + fizz.sayFizz() + ' and ' + baz.sayBaz();
                });


        function HAPPIYfier(object, fnName) {
            function checkTypeInstance(argument, clazz) {
                return argument instanceof clazz;
            }

            function checkTypeInstances(arguments, classes) {
                for (var index = 0; index < arguments.length; index++) {
                    return checkTypeInstance(arguments[index], classes[index]);
                }
            }

            function checkLength(arguments, classes, fnDefinition) {
                return arguments.length === classes.length;
            }

            return {
                define: function define(classes, fnDefinition) {
                    var previousFn = object[fnName];
                    object[fnName] = function () {
                        if (checkLength(arguments, classes, fnDefinition) && checkTypeInstances(arguments, classes)) {
                            return fnDefinition.apply(object, arguments);
                        } else if (previousFn) {
                            return previousFn.apply(object, arguments);
                        }
                    };
                    return {
                        define: define
                    };

                }
            };
        }


    });
    it('should say Hi Baz', function () {
        expect(obj.sut(new Baz())).toBe('Ciao Baz');
    });

    it('should say Hi Fizz', function () {
        expect(obj.sut(new Fizz())).toBe('Hi Fizz');
    });

    it('should say Hi Buzz', function () {
        expect(obj.sut(new Buzz())).toBe('Yo Buzz!');
    });

    it('should say Hi Fizz and Baz', function () {
        expect(obj.sut(new Fizz(), new Baz())).toBe('Hi Fizz and Baz');
    });

});