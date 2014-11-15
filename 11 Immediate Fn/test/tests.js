describe('Iteration', function () {

    var buttons, buttonToClick;
    var result;

    beforeEach(function () {
        buttonToClick = givenAButton();
        buttons = [givenAButton(), buttonToClick, givenAButton()];

    });

    it('should be out of range', function () {
        for (var index = 0; index < buttons.length; index++) {
            buttons[index].addEventListener('click', function () {
                result = index;
            });
        }

        whenClickOn(buttonToClick);
        expect(result).not.toBe(1);
    });

    it('should remember the right index', function () {
        for (var index = 0; index < buttons.length; index++) {
            (function (storedIndex) {
                buttons[storedIndex].addEventListener('click', function () {
                    result = storedIndex;
                });
            })(index);
        }

        whenClickOn(buttonToClick);
        expect(result).toBe(1);
    });

    function givenAButton() {
        return document.createElement('button');
    }

    function whenClickOn(button) {
        var evObj = document.createEvent('Events');
        evObj.initEvent('click', true, false);
        button.dispatchEvent(evObj);
    }
});