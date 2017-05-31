/*
Author: Kai Huang
Email: huangkai2518@gmail.com


*/

const Set = require("immutable").Set;
const mergeSort = require("./mergeSort");



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


function compareNumOfWorkObject(work1, work2){
    return work1.num < work2.num;
}


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

            notFinishedWObjs.forEach(function (objectIndex) {
                group.forEach(function (memberIndex) {
                    let wObject = sortedWList[objectIndex.sortIndex];
                    if (wObject.potn[memberIndex] > 0){
                        wObject.num--;
                    }
                })
            })

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


function groupingPars(groups, pars){
	for (let i=0; i<groups.length; i++){

		for (let j=0; j<groups[i].length; j++){
			let index = groups[i][j];
			pars[index].groupNumber = i;
		}
	}
	return pars;
}


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

    let successRate = 0;

    let nestedBoolArray = createNestedBooleanArrayForAllPars(pars);

    let workList = createWorkList(nestedBoolArray, booleanArrayCompare);

    let sortedWList = mergeSort(workList, compareNumOfWorkObject);

    let groups = generateGroupsForEveryWorkObject(sortedWList, groupSize, successRate);

    groupingPars(groups, pars);

    successRate = successRate/groups.length;
    return successRate;

}

module.exports = greedyAlgorithm;

