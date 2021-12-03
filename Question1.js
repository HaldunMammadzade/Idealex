String.prototype.repeatify = function (num) {
    var str = '';
    for (var j = 0; j < num; j++) {
        str += this;
    }
    return str;
};