/*
Author: Kai Huang
Email: huangkai2518@gmail.com


*/

const Set = require("immutable").Set;
const mergeSort = require("./mergeSort");

function compareNumOfWorkObject(work1, work2){
    return work1.num < work2.num;
}


//
// function contain(list, value){
// 	let sum = 0;
// 	let length = list.length;
// 	for (let i=0; i<length; i++){
// 		if (list[i] === value){
//             sum++;
// 		}
// 	}
// 	return sum;
// }

// function min(list, ilist){
// 	let lgth = list.length;
// 	let min  = Number.MAX_SAFE_INTEGER;
// 	let index = 0;
// 	for (let i=0; i<lgth; i++){
// 		if (list[i] !== 0 && contain(ilist,i) === 0){
// 			if (min > list[i]){
// 				min = list[i];
// 				index = i;
// 			}
// 		}
// 	}
// 	return index;
// }


// // get best partners with its position in sortL
// function minPartners(list, potn, size){
// 	let lgth = potn.length;
// 	let l = [], res = [];
// 	for (let i=0; i<lgth; i++){
// 		if (potn[i] !== 0){
// 			l.push(list[i]);
// 		}
// 	}
// 	l = mergeSort(l, compareNumOfWorkObject);
// 	for (let j=0; j<size-1; j++){
// 		res.push(l[j].ord);
// 	}
// 	return res;
// }


function getOptimalGroupPartnersOfTheFirstOne(firstOne, notFinishedWObjs, groupSize){
    let partnersIndexes = [], removeList = [];

    let count = groupSize -1 , i = 1;
    while (count !== 0 && i < notFinishedWObjs.length){
        const index = notFinishedWObjs[i].originIndex;

        if (firstOne.potn[index] !== 0){
            partnersIndexes.push(index);
            removeList.push(i);
            count--;
        }
        i++;
    }

    // remove element in notFinishedWObjs
    let m = 0;
    removeList.forEach(function (index) {
        notFinishedWObjs.splice(index - m, 1);
        m++;
    })

    return partnersIndexes;
}

//min, max should be integers. Sample input: min=3, max=5
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}


function groupTheRests(allGroups, rests, groupSize){
    let numberOfRestGroups = Math.floor(rests.length/groupSize);
    let numberOfRemains = rests.length % groupSize;

    let i;
    for (i=0; i<numberOfRestGroups; i++){
        let group = [];
        for (let j=0; j<groupSize; j++){
            group.push(rests[i * groupSize + j])
        }
        allGroups.push(group);
    }
    // console.log(allGroups);
    // console.log(rests);
    for (let k=0; k<numberOfRemains; k++){
        let randomNumber = generateRandomNumber(0, allGroups.length - 1);
        // console.log(randomNumber + "  " + k + " " + allGroups[randomNumber] + " " + i);
        allGroups[randomNumber].push(rests[i + k].originIndex);
    }
// console.log("fdsafdsfsasdsd");
    return allGroups;
}


function generateGroupsForEveryWorkObject (sortedWList, groupSize, successRate){
    let allGroups = [], rests = [], notFinishedWObjs = [];
// console.log("abc1");
    for (let i=0; i<sortedWList.length; i++){
        notFinishedWObjs.push({
            sortIndex: i,
            originIndex: sortedWList[i].index,
        });
    }
    // console.log("abc2");
    while (notFinishedWObjs.length >= groupSize){
        const firstOne = sortedWList[notFinishedWObjs[0].sortIndex];

        if (firstOne.num < groupSize - 1){
            rests.push(firstOne.index);
        }
        else{
            const partnersIndexes = getOptimalGroupPartnersOfTheFirstOne(firstOne, notFinishedWObjs, groupSize);

            let group = [firstOne.index];
            group = group.concat(partnersIndexes);
            allGroups.push(group);

            successRate++;
        }

        notFinishedWObjs.splice(0, 1);
    }
    // console.log("abc3");
    for (let j=0; j<notFinishedWObjs.length; j++){
        rests.push(notFinishedWObjs[j]);
    }
    // console.log("abc4");
    return groupTheRests(allGroups, rests, groupSize);
}


// //min, max should be integers. Sample input: min=3, max=5
// function getRandomNum(min, max){
// 	return Math.floor(Math.random() * (max-min+1)) + min;
// }
//
//
// function addRestStd(teams, sortL, unavlStd, size){
// 	for (let ii=0; ii<sortL.length; ii++){
// 		unavlStd.push(sortL[ii].index);
// 	}
// 	let num = Math.floor(unavlStd.length/size);
// 	let r   = unavlStd.length%size;
// 	for (let i=0; i<num; i++){
// 		let lst = [];
// 		for (let j=0; j<size; j++){
// 			lst.push(unavlStd[i*size+j]);
// 		}
// 		teams.push(lst);
// 	}
// 	// let lr = [];
// 	for (let k=0; k<r; k++){
// 		let rdmNum = getRandomNum(0,teams.length-1);
// 		teams[rdmNum].push(unavlStd[i+k]);
// 		// lr.push(unavlStd[i+k]);
// 	}
// 	// teams.push(lr);
// 	return teams;
// }
//
// function order(sortL, list){
// 	let lgth = sortL.length;
// 	for (let i=0; i<lgth; i++){
// 		sortL[i].ord = i;
// 	}
// 	return list;
// }
//
// function removePotential(list, sortL, index){
// 	for (let k=0; k<sortL.length; k++){
// 		sortL[k].potn[index] = 0;
// 	}
// 	for (let m=0; m<list.length; m++){
// 		list[m].potn[index] = 0;
// 	}
// }
//
// function removeStd(pos, sortL){
// 	for (let i=0; i<sortL.length; i++){
// 		if (sortL[i].ord === pos ){
// 			sortL.splice(i ,1);
// 			return;
// 		}
// 	}
// }

// function match(list, sortL, size){
// 	let unavlStd = [];
// 	let teams 	 = [];
//
// 	while(sortL.length >= size){
// 		let partners = [];
// 		let team 	 = [];
// 		if (sortL[0].num < size - 1){
// 			unavlStd.push(sortL[0].index);
// 		}
// 		else{
// 			partners = minPartners(list,  sortL[0].potn, size);
//
// 			for (let i=0; i<partners.length; i++){
// 				let pos = partners[i];
// 				team.push(sortL[pos].index);
// 				removePotential(list, sortL, sortL[pos].index);
// 			}
// 			for (let j=0; j<partners.length; j++){
// 				removeStd(partners[j], sortL);
// 			}
// 			team.push(sortL[0].index);
// 			teams.push(team);
// 		}
// 		removePotential(list, sortL, sortL[0].index);
// 		sortL.splice(0,1);
// 		order(sortL, list);
// 	}
// 	addRestStd(teams, sortL, unavlStd, size);
// 	return teams;
// }

function groupingPars(groups, pars){
	for (let i=0; i<groups.length; i++){

		for (let j=0; j<groups[i].length; j++){
			let index = groups[i][j];
			pars[index].groupNumber = i;
		}
	}
	return pars;
}

// function successRate(groups, pars){
// 	let total = groups.length;
// 	let success = 0;
//     let allAnswers = Set([]);
//     pars.forEach(function (par){
//         par.surveyResponses.forEach(function (response) {
//             response.answer.forEach(function (ans){
//                 allAnswers = allAnswers.add(ans);
//             });
//         });
//     });
//
// 	for (let i=0; i<groups.length; i++) {
// 		for (let ii=0; ii<allAnswers.size; ii++){
// 			let sum = 0;
// 			for (let j=0; j<groups[i].length; j++){
// 				let index = groups[i][j];
// 				sum += pars[index].meetingTimes[ii];
// 			}
// 			if (sum === groups[i].length){
// 				success++;
// 				break;
// 			}
// 		}
// 	}
// 	return success/total;
// }


function validateInput(pars, size){
    let result = Array.isArray(pars);
    if (result){
        pars.forEach(function (p) {
            result = result && p.toObject().hasOwnProperty('groupNumber');
            if (result){
                result = result && Number.isInteger(p.groupNumber);
            }
        });
        return result
            && Number.isInteger(size)
            && size > 0;
    }
}

function greedyAlgorithm(pars, groupSize){
    if (!validateInput(pars, groupSize)){
        return [];
    }

    // console.log("111111111111111here");

    let successRate = 0;

    let nestedBoolArray = createNestedBooleanArrayForAllPars(pars);

    // console.log("222222222222222here");
    let workList = createWorkList(nestedBoolArray, booleanArrayCompare);

    // console.log(workList);
    let sortedWList = mergeSort(workList, compareNumOfWorkObject);

    // console.log("444444444444444here");
    // workList = order(sortedWList, workList);

    // console.log("555555555555555here");
    // let teams = match(workList, sortedWList, groupSize);
    let groups = generateGroupsForEveryWorkObject(sortedWList, groupSize, successRate);

    // console.log("666666666666666here");
    groupingPars(groups, pars);

    // console.log("111111111111111here");
    successRate = successRate/groups.length;
    return successRate;

}

module.exports = greedyAlgorithm;


function WorkObject (index, num, potn) {
    this.index 	= index;
    this.num   	= num;  // number of potential partners
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
function createWorkList(nestedArray){
    let inputLength = nestedArray.length;
    let workList = [];

    for (let i=0; i<inputLength; i++){
        let similarCount = 0, similarity = [];
        for (let j=0; j<inputLength; j++){
            if (i !== j){
                let similarValue = booleanArrayCompare(nestedArray[i], nestedArray[j]);
                similarCount += (similarValue === 0) ? 0 : 1;
                similarity.push(similarValue);
            }
            else{
                similarity.push(0);
            }
        }
        let workObject = new WorkObject(i, similarCount, similarity);
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
