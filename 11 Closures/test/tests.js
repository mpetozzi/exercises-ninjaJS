describe('Variable', function () {

    it('should be part of the scope after declaration', function () {
        valueNotExists();

        var outerValue = {};

        valueExists();

        function valueExists() {
            expect(outerValue).toBeDefined();
        }

        function valueNotExists() {
            expect(outerValue).not.toBeDefined();
        }
    });

    it('should be part of the scope after declaration', function (done) {
        setTimeout(valueExists, 0);

        var outerValue = {};

        setTimeout(valueExists, 0);

        function valueExists() {
            expect(outerValue).toBeDefined();
            done();
        }
    });

});