/*
Author: Kai Huang
Email: huangkai2518@gmail.com


*/

const Set = require("immutable").Set;
const mergeSort = require("./mergeSort");



function WorkObject (index, num, potn) {
    this.index 	= index;
    this.numOfPotential = num;  // number of potential partners
    this.potnList = potn; // potential partners
}

let successRate = {
    success: 0,
    total: 0,
};

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
        if ( arrayA[i] === true && arrayB[i] === true)
            res++;
    }
    return res;
}


function compareNumOfWorkObject(work1, work2){
    return work1.numOfPotential < work2.numOfPotential;
}


function getOptimalGroupPartnersOfTheFirstOne(firstOne, notFinishedWObjs, groupSize){
    let partnersIndexes = [], removeList = [];

    let count = groupSize -1 , i = 1;
    while (count !== 0 && i < notFinishedWObjs.length){
        const index = notFinishedWObjs[i].originIndex;

        if (firstOne.potnList[index] !== 0){
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

    for (let k=0; k<numberOfRemains; k++){
        let randomNumber = generateRandomNumber(0, allGroups.length - 1);
        allGroups[randomNumber].push(rests[i + k]);
        successRate.success--;
    }

    return allGroups;
}


function generateGroupsForEveryWorkObject (sortedWList, groupSize){
    let allGroups = [], rests = [], notFinishedWObjs = [];

    for (let i=0; i<sortedWList.length; i++){
        notFinishedWObjs.push({
            sortIndex: i,
            originIndex: sortedWList[i].index,
        });
    }
    while (notFinishedWObjs.length >= groupSize){
        const firstOne = sortedWList[notFinishedWObjs[0].sortIndex];

        if (firstOne.numOfPotential < groupSize - 1){
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
                    if (wObject.potnList[memberIndex] > 0){
                        wObject.numOfPotential--;
                    }
                })
            })

            successRate.success++;
        }

        notFinishedWObjs.splice(0, 1);
    }

    for (let j=0; j<notFinishedWObjs.length; j++){
        rests.push(notFinishedWObjs[j].originIndex);
    }

    return groupTheRests(allGroups, rests, groupSize);
}


function groupingPars(groups, pars, lockedGroup){
    const sortedLockedGroup = lockedGroup.sort(function(a, b) {
        return a - b;
    });
	for (let i=0; i<groups.length; i++){

        let realGroupNumber = i;
        sortedLockedGroup.forEach(function (lockedGroupNumber) {
            if (realGroupNumber >= lockedGroupNumber){
                realGroupNumber++;
            }
        });

		for (let j=0; j<groups[i].length; j++){
			let index = groups[i][j];
			pars[index].groupNumber = realGroupNumber;
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

function greedyAlgorithm(pars, groupSize, lockedGroup){
    if (!validateInput(pars, groupSize)){
        return [];
    }

    let nestedBoolArray = createNestedBooleanArrayForAllPars(pars);

    let workList = createWorkList(nestedBoolArray, booleanArrayCompare);

    let sortedWList = mergeSort(workList, compareNumOfWorkObject);

    let groups = generateGroupsForEveryWorkObject(sortedWList, groupSize);

    groupingPars(groups, pars, lockedGroup);

    successRate.total = groups.length;
    return successRate.success / successRate.total;

}

module.exports = greedyAlgorithm;

