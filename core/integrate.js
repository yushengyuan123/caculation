function integrateArr(exerciseArr, answerArr) {
	if(exerciseArr.length != answerArr.length) {
		return console.error('parameter error');
	}
	let len = exerciseArr.length;
	let arr = [];
	for(let i = 0; i < len; i++) {
		arr.push({
			question: exerciseArr[i],
			answer: answerArr[i]
		})
	}
	return arr;
}

module.exports = {
    integrateArr: integrateArr,
}