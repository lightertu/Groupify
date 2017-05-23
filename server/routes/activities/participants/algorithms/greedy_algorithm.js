/*
Author: Kai Huang
Email: huangkai2518@gmail.com

let names = ["Rui Tu", "Kai Huang", "Joseph I", "Matt", "He daHe"];
let skills = ["Java", "C++", "JavaScript", "Lisp", "Python", "Node.js", "React.js"];
let skillLevel = ["Beginner", "Some Experience", "Expert" ];

		  0		1	  2			  5
time = [M.t0, M.t1, M.t2, ... , M.t5,   -> 0
		T.t0, T.t1, T.t2, ... , T.t5,   -> 1
		W.t0, W.t1, W.t2, ... , W.t5,   -> 2
		R.t0, R.t1, R.t2, ... , R.t5,   -> 3
		F.t0, F.t1, F.t2, ... , F.t5]   -> 4

let samplePerson =
{
	id: 			1,
	groupNumber: 		-1,
	meetingTimes:   	[false, false, false, false ... false],
						^		^		^	  ^			^
						M:t1    M:t2    M:t3  M:t4      F:t5
};

let sampleInput = [
	samplePerson0,
	samplePerson1,
		.
		.
		.
	samplePersonN]
*/

// var randomAlgorithm = require('./randomAlgorithm').randomAlgorithm;
// var getRandomNum	= require('./randomAlgorithm').getRandomNum;
// var getGroupList    = require('./randomAlgorithm').getGroupList;

function Std(index, num, ord, potn){
	this.index 	= index;
	this.num   	= num;  // number of potential partners
	this.ord    = ord;  // the order of the students, sort by their match posibility
	this.potn 	= potn; // potential partners
}

function clCompare(st_a, st_b){
	console.log(st_a)
	let l = st_a.meetingTimes.length;
	let val = 0;
	for (let i=0; i<l; i++){
		if (st_a.meetingTimes[i]==true && st_b.meetingTimes[i]==true)
			val++;
	}
	return val;
}


function createList(stds){
	let lgth = stds.length;
	let list = [];
	for (let i=0; i<lgth; i++){
		let num = 0;
		let potn = [];
		for (let j=0; j<lgth; j++){
			if (i!=j){
				let val = clCompare(stds[i], stds[j]);
				potn.push(val);
				num += (val == 0) ? 0 : 1;
			}
			else{
				potn.push(0);
			}
		}
		let newStd = new Std(i, num, -1, potn);
		list.push(newStd);
	}
	return list;
}

function msSortTwoList(l1, l2){
	let lgth1 = l1.length;
	let lgth2 = l2.length;
	let lgth;
	let i=0, j=0, k=0;
	let resList = [], l=[];
	while (i<lgth1 && j<lgth2){
		if (l1[i].num < l2[j].num){
			resList.push(l1[i]);
			i++;
		}
		else{
			resList.push(l2[j]);
			j++;
		}
	}
	if (i == lgth1){
		k = j; lgth = lgth2; l = l2;
	}
	else{
		k = i; lgth = lgth1; l = l1;
	}
	for(; k<lgth; k++){
		resList.push(l[k]);
	}
	return resList;
}

function msSplit(list){
	let lgth = list.length;
	let l1 = [], l2 = [];
	var i=0;
	for(; i<Math.floor(lgth/2); i++){
		l1.push(list[i]);
	}
	for (; i<lgth; i++){
		l2.push(list[i]);
	}
	return [l1,l2];
}

function mergeSort(list){
	if (list.length < 2){
		return list;
	}
	list = msSplit(list);
	let l1 = mergeSort(list[0]);
	let l2 = mergeSort(list[1]);
	return msSortTwoList(l1, l2);
}

function contain(list, value){
	var sum = 0;
	var length = list.length;
	for (var i=0; i<length; i++){
		if (list[i] === value){
            sum++;
		}
	}
	return sum;
}

function min(list, ilist){
	let lgth = list.length;
	let min  = Number.MAX_SAFE_INTEGER;
	let index = 0;
	for (let i=0; i<lgth; i++){
		if (list[i] != 0 && contain(ilist,i) == 0){
			if (min > list[i]){
				min = list[i];
				index = i;
			}
		}
	}
	return index;
}


// get best partners with its position in sortL
function minPartners(list, sortL, potn, size){
	let lgth = potn.length;
	let l = [], res = [];
	for (let i=0; i<lgth; i++){
		if (potn[i] != 0){
			l.push(list[i]);
		}
	}
// console.log(l);
	l = mergeSort(l);
	for (let j=0; j<size-1; j++){
		res.push(l[j].ord);
	}
	return res;
}

//min, max should be integers. Sample input: min=3, max=5
function getRandomNum(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}


function addRestStd(teams, sortL, unavlStd, size){
	for (let ii=0; ii<sortL.length; ii++){
		unavlStd.push(sortL[ii].index);
	}
	let num = Math.floor(unavlStd.length/size);
	let r   = unavlStd.length%size;
	for (var i=0; i<num; i++){
		let lst = [];
		for (let j=0; j<size; j++){
			lst.push(unavlStd[i*size+j]);
		}
		teams.push(lst);
	}
	// let lr = [];
	for (let k=0; k<r; k++){
		let rdmNum = getRandomNum(0,teams.length-1);
		teams[rdmNum].push(unavlStd[i+k]);
		// lr.push(unavlStd[i+k]);
	}
	// teams.push(lr);
	return teams;
}

function order(sortL, list){
	let lgth = sortL.length;
	for (let i=0; i<lgth; i++){
		sortL[i].ord = i;
	}
	return list;
}

function removePotential(list, sortL, index){
	for (let k=0; k<sortL.length; k++){
		sortL[k].potn[index] = 0;
	}
	for (let m=0; m<list.length; m++){
		list[m].potn[index] = 0;
	}
}

function removeStd(pos, sortL){
	for (let i=0; i<sortL.length; i++){
		if (sortL[i].ord == pos ){
			sortL.splice(i ,1);
			return;
		}
	}
}

function match(list, sortL, size){
	let unavlStd = [];
	let teams 	 = [];
	let ptNum    = size - 1;
	while(sortL.length >= size){
		let partners = [];
		let team 	 = [];
		if (sortL[0].num < ptNum){
			unavlStd.push(sortL[0].index);
		}
		else{
			partners = minPartners(list, sortL, sortL[0].potn, size);

			for (let i=0; i<partners.length; i++){
				let pos = partners[i];
				team.push(sortL[pos].index);
				removePotential(list, sortL, sortL[pos].index);
			}
			for (let j=0; j<partners.length; j++){
				let pos = partners[j];
				removeStd(pos, sortL);
			}
			team.push(sortL[0].index);
			teams.push(team);
		}
		removePotential(list, sortL, sortL[0].index);
		sortL.splice(0,1);
		order(sortL, list);
	}
	addRestStd(teams, sortL, unavlStd, size);
	return teams;
}

function grouping(teams, stds, size){
	let lgth = teams.length;
// console.log(stds);
	for (let i=0; i<lgth; i++){
		for (let j=0; j<teams[i].length; j++){
			let index = teams[i][j];
			stds[index].groupNumber = i;
		}
	}
	return stds;
}

function successRate(teams, stds){
	let total = teams.length;
	let success = 0;
	for (let i=0; i<teams.length; i++) {
		for (let ii=0; ii<30; ii++){ // 30 is the number of time slice
			let sum = 0;
			for (let j=0; j<teams[i].length; j++){
				let index = teams[i][j];
				sum += stds[index].meetingTimes[ii];
			}
			if (sum == teams[i].length){
				success++;
				break;
			}
		}
	}
	return success/total;
}


function greedy_algorithm_based_on_Time(stds, size){
	// let table   = createTable(stds);
	let list    = createList(stds);
	let sortL  	= mergeSort(list);
	list = order(sortL, list);
	let teams = match(list, sortL, size);
	grouping(teams, stds, size);

	return successRate(teams, stds);
}

module.exports = {
    Std:         						Std,
    clCompare:             				clCompare,
    createList:             			createList,
    msSortTwoList:         				msSortTwoList,
    msSplit:               				msSplit,
    mergeSort:      					mergeSort,
    contain:           					contain,
    min:          						min,
    minPartners:  						minPartners,
    addRestStd:   						addRestStd,
    order:          					order,
    removePotential:         			removePotential,
    match:   							match,
    greedy_algorithm_based_on_Time:     greedy_algorithm_based_on_Time
};
