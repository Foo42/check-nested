function checkNested(obj, objStr) {
    var args = objStr.split(/[\.\[\]\"\']+/g).filter(function (x) {
        return x !== '';
    });

    for (var i = 0; i < args.length; i++) {
        if (!obj || !obj.hasOwnProperty(args[i])) {
            return false;
        }

        obj = obj[args[i]];
    }

    return obj;
}

module.exports = checkNested;
