/**
 * 符号优先级比较
 * @param operator_one
 * @param operator_two
 * @returns {boolean}
 */
const operatorRank = function (operator_one, operator_two) {
    if(operator_one === void 0) {
        throw new Error('you not have a expression')
    }
    if (operator_two === undefined) {
        return true
    }
    if (operator_one === '/' || operator_one === '*') {
        return !(operator_two === '/' || operator_two === '*');
    } else if (operator_one === '+' || operator_one === '-'){
        return operator_two === ')' || operator_two === '(';
    } else if (operator_two === ')' || operator_two === '(') {
        return false
    }
}

const changeFormat = function (array) {
    let freeback = array.slice(0)
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '÷') {
            freeback[i] = '/'
        }
        if (array[i].length > 1 && array[i].indexOf('/') !== -1) {
            let temp = freeback[i].split('/')
            freeback[i] = temp[0] / temp[1]
        }
    }
    return freeback
}

/**
 * 计算器
 * @param expressionArray
 * @returns {[]}
 */
const counter = function (expressionArray) {
    expressionArray = changeFormat(expressionArray.split(' '))
    let outStack = []
    let operatorStack = []
    for (let i = 0; i < expressionArray.length; i++) {
        if (typeof Number(expressionArray[i]) == "number"
            && !isNaN(Number(expressionArray[i]))) {
            outStack.push(expressionArray[i])
        } else if (expressionArray[i] === '(') {
            operatorStack.push(expressionArray[i])
        } else if (expressionArray[i] === '+'
            || expressionArray[i] === '-'
            || expressionArray[i] === '*'
            || expressionArray[i] === '/') {
            if (operatorRank(expressionArray[i], operatorStack[operatorStack.length-1])) {
                operatorStack.push(expressionArray[i])
            } else {
                outStack.push(operatorStack.pop())
                while (!operatorRank(expressionArray[i], operatorStack[operatorStack.length-1])) {
                    outStack.push(operatorStack.pop())
                }
                operatorStack.push(expressionArray[i])
            }
        } else if (expressionArray[i] === ')') {
            while (operatorStack[operatorStack.length-1] !== '(') {
                outStack.push(operatorStack.pop())
            }
            if (operatorStack[operatorStack.length-1] === '(') {
                operatorStack.pop()
            }
        }
        if (i === expressionArray.length - 1) {
            while (operatorStack.length !== 0) {
                outStack.push(operatorStack.pop())
            }
        }
    }
    return outStack
}

/**
 * 差点把爷整吐了
 * @param suffix
 * @returns {[]}
 */
const getResult = function (suffix) {
    suffix = counter(suffix)
    let resultStack = []
    for (let i = 0; i < suffix.length; i++) {
        if (typeof Number(suffix[i]) == "number"
            && !isNaN(Number(suffix[i]))) {
            resultStack.push(Number(suffix[i]))
        } else {
            switch (suffix[i]) {
                case '+': {
                    resultStack.push(Number(resultStack.pop()) + Number(resultStack.pop()))
                    break
                }
                case '-': {
                    let reduce = Number(resultStack.pop())
                    let beReduce = Number(resultStack.pop())
                    resultStack.push(beReduce - reduce)
                    break
                }
                case '*': {
                    resultStack.push(Number(resultStack.pop()) * Number(resultStack.pop()))
                    break
                }
                case '/': {
                    let reduce = Number(resultStack.pop())
                    let beReduce = Number(resultStack.pop())
                    resultStack.push(beReduce / reduce)
                    break
                }
                default: {
                    throw new Error('Illegal symbol ')
                }
            }
        }
    }
    return resultStack[0]
}

module.exports = getResult



