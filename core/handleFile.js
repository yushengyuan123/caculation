let fs = require('fs');
/**
 * 异步写入文件
 * arr: 读取数据的数组
 * type: 写入文件类型（0-->写入题目，1-->写入答案, 2-->写入成绩）
 * callback: 回调函数
 * @param Object, number, function
 */
function wirteFile(arr, type) {
	return new Promise((resolve,reject) => {
		if(!arr) {
			return reject("null file");
		}
		let len = arr.length;
		let str = "";
		let path = "";
		for(let i = 0; i < len; i++) {
			if(i == len-1) {
				str += arr[i];
			} else {
				str += arr[i] + ',\r\n';
			}
		}
		if (type == 0) {
			path = "./static/Exercises.txt";
		} else if (type == 1) {
			path = "./static/Answers.txt";
		} else if (type == 2) {
			path = "./static/Grade.txt";
		} else {
			return reject("parameter error");
		}
		fs.writeFile(path, str, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	})
}
/**
 * 同步读取文件，返回文件字符串数组
 * type: 读取文件类型（0-->读取题目，1-->读取答案，2-->读取成绩）
 * @param Object, number
 */
function readFile(type) {
	if (type == 0) {
		path = "./static/Exercises.txt";
	} else if (type == 1) {
		path = "./static/Answers.txt";
	} else {
		return console.error("parameter error");
	}
	return fs.readFileSync(path).toString().split(',\r\n');
	// fs.readFile(path, function (err, res) {
	// 	if (err) {
	// 		return console.error(err);
	// 	}
	// 	let back = res.toString().split(',\r\n')
	// });
}
/**
 * 获取填写的答案数组
 * 参数为题目文件读出来的数组，即 getWriteArr(readFile(0))
 * @param Array
 */
function getWriteArr(exerciseArr) {
	let len = exerciseArr.length;
	let arr = [];
	for(let i = 0; i < len; i++) {
		arr.push(exerciseArr[i].split('=')[1].replace(/\s+/g,""));
	}
	return arr;
	// 返回格式： [ '1' , '2', '3']，对应题目顺序
}

module.exports = {
    wirteFile: wirteFile,
    readFile: readFile,
    getWriteArr: getWriteArr
}