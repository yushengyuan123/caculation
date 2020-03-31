let exerciseArr = null;  // 存放题目的数组
let answerArr = null;	// 存放答案的数组
let gradeArr = null;   // 存放成绩的数组
let exerciseNum = 10;  // 题目数量
let {wirteFile, readFile} = require("./core/handleFile.js")




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
	if(exerciseNum == num) {
		return;
	}
	
	if(num >999) {
		alert("题目数量太多，暂不测试");
		return;
	}

	exerciseNum = num;
	let nowDom = document.getElementsByClassName('exercise-select')[0];
	nowDom.classList.remove('exercise-select');
	target.classList.add('exercise-select');
	createExercise(num);
}

// 生成题目与答案文件
function createExercise(num) {
	exerciseArr = [];
	answerArr = [];
	// 测试数据
	for(let i = 0; i < num; i++) {
		exerciseArr.push(`${Math.round(Math.random() * 10)} + ${Math.round(Math.random() * 10)} = `);
		answerArr.push(Math.round(Math.random() * 10));
	}
	showExercise();
	wirteFile(exerciseArr, 0, ()=>{
		wirteFile(answerArr, 1, ()=>{
			// console.log(readFile(0));
			// console.log(readFile(1));
		});
	});
}

// 显示题目
function showExercise() {
	let len = exerciseArr.length;
	exerciseCon.innerHTML = ''
	for(let i = 0; i < len; i++) {
		exerciseCon.innerHTML += `<span class="exercise"><p>${exerciseArr[i]}</p><input type="text"></span>`
	}
}

// 事件2：提交答案
function commit() {
	judeg();
}

function judeg() {
	alert('校验中');
}