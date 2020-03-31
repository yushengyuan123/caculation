const _isNumber = require('../share/utils').isNumber

const operator = ['+', '-', '*', '/']
/**
 * 生成四则运算表达式
 * @param number
 */
const createExpression = function(number) {
    if(!_isNumber(number)) {
        throw new Error(`The ${number} is not a number type, please check again!`)
    }
}
