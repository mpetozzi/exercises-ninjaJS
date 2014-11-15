this.HAPPYfier = {
    addCache: function (object, functionName, functionDefinition) {
        object[functionName] = function () {
            if (object[functionName].cache) {
                return object[functionName].cache;
            }
            return object[functionName].cache = functionDefinition();
        };
    }
}