function merge(root) {
    for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            root[key] = arguments[i][key];
        }

    }
    return root;
}
var merge = merge({prova:'aha'},{capra:'bhee'});
console.log(merge.prova);
console.log(merge.capra);