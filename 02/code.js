var myLib2 = (function () {
    function myLib2() {
        //initialize
        console.log('c');
    }
    console.log('d');
    return myLib2;
})();

console.log('0');

(function () {
    var myLib = window.myLyb = function () {
        //initialize
        console.log('a');
    }
    console.log('b');

})();