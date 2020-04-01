const _isNumber = require('../share/utils').isNumber
const getRandom = require('../share/utils').getRandom
const print = require('../share/utils').printf

const operator = ['+', '-', '*', '÷']

/**
 * 随机获得一个运算符
 * @returns {string}
 */
function getOperator() {
    return operator[Math.floor(Math.random() * (3 + 1))]
}


const _positive = function (expression) {
    let exp = expression.split(' ')
    if() {

    } else {

    }
    print(exp)
}

_positive('9 - 5 + 1 =')

/**
 * 生成计算表达式
 * @param number
 * @returns {['1 + 1 =', ...]}
 */
const createExpression = function(number) {
    if(!_isNumber(number)) {
        throw new Error(`The ${number} is not a number type, please check again!`)
    }
    let result = []
    let operands = null
    for (let i = 0; i < number; i++) {
        operands = Math.floor(Math.random()* 3 + 1)
        switch(operands) {
            case 1: {
                result.push(`${getRandom()} ${getOperator()} ${getRandom()} = `)
                break
            }
            case 2: {
                result.push(`${getRandom()} ${getOperator()} ${getRandom()} ${getOperator()} ${getRandom()} = `)
                break
            }
            case 3: {
                result.push(`${getRandom()} ${getOperator()} ${getRandom()} ${getOperator()} ${getRandom()} ${getOperator()} ${getRandom()} = `)
                break
            }
            default: {
                throw new Error('operands is not in the range of 3')
            }
        }
    }
    return result
}


