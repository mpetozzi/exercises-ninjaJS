describe('Function with cache', function () {

    var object = {};
    var MILLISECONDS_TO_WAIT = 500;

    beforeEach(function () {
        HAPPYfier.addCache(object, 'getResultSlowly', slowFunction);

        function slowFunction() {
            sleep(MILLISECONDS_TO_WAIT);
            return 'abc';
        }

        function sleep(timeToWait) {
            timeToWait += new Date().getTime();
            console.log('In this case I want to freeze JS');
            while ((new Date()) < timeToWait);
        }
    });
    afterEach(function () {
        object = {};
    });

    it('should return the same result', function () {
        var result = object.getResultSlowly();
        expect(object.getResultSlowly()).toBe(result);
    });

    it('should be faster the second time', function () {
        var startTime = new Date();

        object.getResultSlowly();
        expect((new Date()) - startTime).not.toBeLessThan(MILLISECONDS_TO_WAIT);

        object.getResultSlowly();
        expect((new Date()) - startTime).toBeLessThan(MILLISECONDS_TO_WAIT * 2);
    });

});