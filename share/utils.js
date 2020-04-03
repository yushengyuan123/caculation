const print = console.log

const _isNumber = function(number) {
    return !(typeof number != "number" || number < 0);
}

//判断是假分数还是带分数
const bandFraction = function (fraction) {
    let temp = fraction.split('/')
    let result = Number(temp[0]) / Number(temp[1])
    if (result > 1) {
        return `${Math.floor(result)}^${Number(temp[0] - Number(Math.floor(result)) * temp[1] + 1)}/${temp[1]}`
    } else if (result === 1){
        return `1`
    } else {
        return fraction
    }
}

//随机返回分数或者是整数
//Math.floor(Math.random()*(m-n+1)+n)
const getRandom = function() {
    //随机决定是生成整数还是分数1表示整数，0表示分数
    let isZ = Math.round(Math.random())
    if(isZ) {
        return Math.floor(Math.random() * 9 + 1)
    } else {
        let Molecule = Math.ceil(Math.random() * 9 + 1)
        let Denominator = Math.ceil(Math.random() * (Molecule * 10  - 1 + 1) + 1)
        return bandFraction(`${Denominator}/${Molecule}`)
    }
}

module.exports = {
    printf: print,
    isNumber: _isNumber,
    getRandom: getRandom
}

