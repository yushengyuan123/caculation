const _isNumber = require('../share/utils').isNumber
const getRandom = require('../share/utils').getRandom
const print = require('../share/utils').printf
const _ = require('underscore')

const operator = ['+', '-', '*', '÷']

const _toString = Object.prototype.toString

/**
 * 随机获得一个运算符
 * @returns {string}
 */
function getOperator() {
    return operator[Math.floor(Math.random() * (3 + 1))]
}

/**
 *
 * @param qus 提交的答案
 * @param ans 正确的答案
 * @returns {*}
 */
function verifyAnswer(qus, ans) {
    let statistic
    if (_toString.call(qus) !== '[object Array]' || _toString.call(ans) !== '[object Array]') {
        throw new Error('Please dont set the poison for my code')
    }
    return statistic
}


//判断运算式子结果是否大于0
const _positive = function (expression) {
    return eval(expression.replace(/÷/g, '/')) >= 0
}

/**
 * 生成答案
 * @param qus 传入生成计算式子返回的数组
 * @returns {['1', '2', ...]}
 */
const answer = function (qus) {
    if (_toString.call(qus) !== '[object Array]') {
        throw new Error(qus + 'is not a Array')
    }
    let answer = []
    for (let i = 0; i < qus.length; i++) {
        answer.push(eval(qus[i].replace(/÷/g, '/').replace(/=/g,'')))
    }
    return answer
}


/**
 * 生成计算表达式
 * @param number 传入你要生成多少条式子的数量
 * @returns {['1 + 1 =', ...]}
 */
const createExpression = function(number) {
    if(!_isNumber(number)) {
        throw new Error(`The ${number} is not a number type, please check again!`)
    }
    let result = []
    let operands = null
    let output = ''
    let index = 0
    while(index !== number) {
        operands = Math.floor(Math.random()* 3 + 1)
        switch(operands) {
            case 1: {
                output = `${getRandom()} ${getOperator()} ${getRandom()}`
                if(_positive(output)) {
                    result.push(`${output} = `)
                    index++
                }
                break
            }
            case 2: {
                output = `${getRandom()} ${getOperator()} ${getRandom()} ${getOperator()} ${getRandom()}`
                if(_positive(output)) {
                    result.push(`${output} = `)
                    index++
                }
                break
            }
            case 3: {
                output = `${getRandom()} ${getOperator()} ${getRandom()} ${getOperator()} ${getRandom()} ${getOperator()} ${getRandom()}`
                if(_positive(output)) {
                    result.push(`${output} = `)
                    index++
                }
                break
            }
            default: {
                throw new Error('operands is not in the range of 3')
            }
        }
    }
    return result
}

module.exports = {
    createExpression: createExpression,
    answer: answer
}



