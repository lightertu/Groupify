/*
Author: Kai Huang
Email: huangkai2518@gmail.com


*/

const Set = require("immutable");


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
	if (i === lgth1){
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

function mergeSortSplit(list){
	let lgth = list.length;
	let l1 = [], l2 = [];
	let i=0;
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
	list = mergeSortSplit(list);
	let l1 = mergeSort(list[0]);
	let l2 = mergeSort(list[1]);
	return msSortTwoList(l1, l2);
}

function contain(list, value){
	let sum = 0;
	let length = list.length;
	for (let i=0; i<length; i++){
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
		if (list[i] !== 0 && contain(ilist,i) === 0){
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
		if (potn[i] !== 0){
			l.push(list[i]);
		}
	}
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
	for (let i=0; i<num; i++){
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
		if (sortL[i].ord === pos ){
			sortL.splice(i ,1);
			return;
		}
	}
}

function match(list, sortL, size){
	let unavlStd = [];
	let teams 	 = [];

	while(sortL.length >= size){
		let partners = [];
		let team 	 = [];
		if (sortL[0].num < size - 1){
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
				removeStd(partners[j], sortL);
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

function grouping(teams, pars, size){
	let lgth = teams.length;
	for (let i=0; i<lgth; i++){
		for (let j=0; j<teams[i].length; j++){
			let index = teams[i][j];
			pars[index].groupNumber = i;
		}
	}
	return pars;
}

function successRate(teams, pars){
	let total = teams.length;
	let success = 0;
	for (let i=0; i<teams.length; i++) {
		for (let ii=0; ii<30; ii++){ // 30 is the number of time slice
			let sum = 0;
			for (let j=0; j<teams[i].length; j++){
				let index = teams[i][j];
				sum += pars[index].meetingTimes[ii];
			}
			if (sum === teams[i].length){
				success++;
				break;
			}
		}
	}
	return success/total;
}

function validateInput(pars, size){
    let result = Array.isArray(pars);
    pars.forEach(function (p) {
        result = result
            && p.hasOwnProperty('_id')
            && p.hasOwnProperty('groupNumber');
        if (result){
            result = result && ObjectIdIsValid(p._id)
                && typeof p.groupNumber === 'number'
                && p.groupNumber % 1 === 0;
        }
    });

    return result
        && typeof size !== 'number'
        && size > 0
        && size % 1 === 0;
}

function greedyAlgorithm(pars, size){
    if (!validateInput(pars, size)){
        return [];
    }

    let nestedBoolArray = createNestedBooleanArrayForAllPars(pars);

    let workList = createWorkList(nestedBoolArray, booleanArrayCompare);

    let sortedWorkList = mergeSort(workList);

    workList = order(sortedWorkList, workList);

    let teams = match(workList, sortedWorkList, size);

    grouping(teams, pars, size);

    return successRate(teams, pars);

}

module.exports = greedyAlgorithm;


function WorkObject (index, num, ord, potn) {
    this.index 	= index;
    this.num   	= num;  // number of potential partners
    this.ord    = ord;  // the order of the students, sort by their match posibility
    this.potn 	= potn; // potential partners
}

function createNestedBooleanArrayForAllPars(pars){

    let allAnswers = Set([]);
    let nestedArray = [];

    pars.forEach(function (par){
        par.surveyResponses.forEach(function (response) {
            response.answer.forEach(function (ans){
                allAnswers = allAnswers.add(ans);
            });
        });
    });


    pars.forEach(function (par) {
        let booleanArray = [];
        allAnswers.forEach(function (test) {
            let hasIt = false;
            par.surveyResponses.forEach(function (response) {
                hasIt = hasIt || Set(response.answer).has(test);
            })
            booleanArray.push(hasIt);
        });
        nestedArray.push(booleanArray);
    });

    return nestedArray;
}


// input: [ [T, T], [T, F] ]; output: [ WorkObject1, WorkObject2]
function createWorkList(nestedArray, compareFcn){
    let inputLength = nestedArray.length;
    let workList = [];

    for (let i=0; i<inputLength; i++){
        let similarCount = 0, similarity = [];
        for (let j=0; j<inputLength; j++){
            if (i !== j){
                let similarValue = compareFcn(nestedArray[i], nestedArray[j]);
                similarCount += (similarValue === 0) ? 0 : 1;
                similarity.push(similarValue);
            }
            else{
                similarity.push(0);
            }
        }
        let workObject = new WorkObject(i, similarCount, -1, similarity);
        workList.push(workObject);
    }
    return workList;
}


function booleanArrayCompare(arrayA, arrayB){
    let res = 0;
    for (let i=0; i<arrayA.length; i++){
        if ( arrayA[i] === arrayB[i] === true)
            res++;
    }
    return res;
}
