const print = console.log

const _isNumber = function(number) {
    return !(typeof number != "number" || number < 0);
}

module.exports = {
    printf: print,
    isNumber: _isNumber
}

