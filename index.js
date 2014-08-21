function checkNested(obj, objStr) {
    var args = objStr.split('.');

    for (var i = 1; i < args.length; i++) {
        if (!obj || !obj.hasOwnProperty(args[i])) {
            return false;
        }
        obj = obj[args[i]];
    }
    return true;
}
