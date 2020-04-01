let exerciseArr = null;  // 存放题目的数组
let answerArr = null;	// 存放答案的数组
let gradeArr = null;   // 存放成绩的数组
let exerciseNum = 10;  // 题目数量
let {wirteFile, readFile, getWriteArr} = require("./core/handleFile.js")

window.onload = ()=>{
   createExercise(exerciseNum);
}

// 监听事件
let con = document.getElementsByClassName('con')[0];

con.onclick = (e)=>{
	let target = e.target;
	let clickFun = target.getAttribute('click');
	switch(clickFun) {
		case 'creatExercise': 
			changeExerciseNum(target);
			break;
		case 'commit': 
			commit(target);
			break;
		default:
			console.log('无效的点击事件');
			break;
	}
}

// 事件1：切换题目数量
let exerciseCon = document.getElementsByClassName('exercise-con')[0];
function changeExerciseNum(target){
	let num = target.getAttribute('num');
	// if(exerciseNum == num) {
	// 	return;
	// }
	exerciseNum = num;
	let nowDom = document.getElementsByClassName('exercise-select')[0];
	nowDom.classList.remove('exercise-select');
	target.classList.add('exercise-select');
	createExercise(num);
}

// 生成题目与答案
function createExercise(num) {
	exerciseArr = [];
	answerArr = [];
	// 测试数据
	for(let i = 0; i < num; i++) {
		let num1 = Math.round(Math.random() * 10);
		let num2 = Math.round(Math.random() * 10);
		let num3 = Math.round(Math.random() * 10);
		let num4 = Math.round(Math.random() * 10);
		// exerciseArr.push(`${num1} + ${num2} = ${num3}`);
		exerciseArr.push(`${num1} + ${num2} = `);
		answerArr.push(num4);
	}
	showExercise();
	// wirteFile(exerciseArr, 0).then(()=>{
	// 	wirteFile(answerArr, 1).then(()=>{
	// 		console.log(readFile(0));
	// 		console.log(readFile(1));
	// 	});
	// })
}

// 显示题目
function showExercise() {
	let len = exerciseArr.length;
	exerciseCon.innerHTML = ''
	for(let i = 0; i < len; i++) {
		let num = Math.round(Math.random() * 10);
		exerciseCon.innerHTML += 
		`<span class="exercise">
			<p>${exerciseArr[i]}</p>
			<input class="exercise-write" type="text">
			<div class="exercise-judeg"></div>
		</span>`
	}
}

// 事件2：提交答案
function commit() {
	// 图形界面操作
	let writeArr = [];
	let writeDomArr = document.getElementsByClassName('exercise-write');
	let len =  writeDomArr.length;
	for(let i = 0; i < len; i++) {
		writeArr.push(writeDomArr[i].value);
	}
	judeg(writeArr, answerArr);
	// 命令行文件操作：
	// judeg(getWriteArr(readFile(0)), readFile(1))
}

// 验证函数
function judeg(writeArr, answerArr) {
	console.log('write:', writeArr);
	console.log('answer:', answerArr);

	let len = answerArr.length;
	let exerciseJudgeArr = document.getElementsByClassName('exercise-judeg');
	for(let i = 0; i < len; i++) {
		if(writeArr[i] == answerArr[i]) {
			exerciseJudgeArr[i].innerHTML = '√';
			exerciseJudgeArr[i].style.color="#080";
		} else {
			exerciseJudgeArr[i].innerHTML = 'X';
			exerciseJudgeArr[i].style.color="#f40";
		}
	}
}