const print = console.log

const _isNumber = function(number) {
    return !(typeof number != "number" || number < 0);
}

//随机返回分数或者是整数
//Math.floor(Math.random()*(m-n+1)+n)
const getRandom = function() {
    //随机决定是生成整数还是分数1表示整数，0表示分数
    let isZ = Math.round(Math.random())
    if(isZ) {
        return Math.floor(Math.random() * 9 + 1)
    } else {
        let Denominator = Math.floor(Math.random() * 9 + 1)
        let Molecule = Math.floor(Math.random() * 9 + 1)
        return `${Denominator}/${Molecule}`
    }
}

module.exports = {
    printf: print,
    isNumber: _isNumber,
    getRandom: getRandom
}

