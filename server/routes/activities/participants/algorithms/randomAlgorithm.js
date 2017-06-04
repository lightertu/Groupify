/*
Author: Kai Huang
Email: huangkai2518@gmail.com

Input and output are  array. If input is not array or size is not an positive number, return [].

Example:

pars = [{... , groupNumber: -1},
        {... , groupNumber:-1}],
        {... , groupNumber:-1}],
        {... , groupNumber:-1}],
        {... , groupNumber:-1}]
       ]
size  = 2
 */

const ObjectIdIsValid = require("mongoose").Types.ObjectId.isValid;


//min, max should be integers. Sample input: min=3, max=5
function getRandomNum(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}

function getGroupList(groupNum, rest, size){
	let lr = [], res = [];
	let i, j, k;
	for (i=0; i<rest; i++){
		lr[i] = getRandomNum(0, groupNum-1);
	}

	for (j=0; j<groupNum; j++){
		res[j] = size;
	}

	for (k=0; k<lr.length; k++){
		res[lr[k]] += 1;
	}
	return res;
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


function grouping(groupNumber, lockedGroup){
    const sortedLockedGroup = lockedGroup.sort(function(a, b) {
        return a - b;
    });

    let realGroupNumber = groupNumber;
    sortedLockedGroup.forEach(function (lockedGroupNumber) {
        if (realGroupNumber >= lockedGroupNumber){
            realGroupNumber++;
        }
    });

    return realGroupNumber;
}

function randomAlgorithm(pars, gpSize, lockedGroup)
{
	if (!validateInput(pars, gpSize)){
		return [];
	}
	let sLength = pars.length;
	let groupNum = Math.floor(sLength/gpSize);

	//there will be r group with size one more than default size.
	let rest = pars.length % gpSize;

	let groupList = getGroupList(groupNum, rest, gpSize);
	let groupIndex =[];
	for (let i=0; i<groupNum; i++){
		groupIndex[i] = i;
	}

	for (let j=0; j<sLength; j++){
		let num = getRandomNum(0, groupList.length-1);
        pars[j].groupNumber = grouping(groupIndex[num], lockedGroup);
		groupList[num] -= 1;

		if (groupList[num] === 0){
			groupList.splice(num, 1);
			let k = num;
			while (k < groupIndex.length-1){
				groupIndex[k] = groupIndex[k+1];
				k++;
			}
		}

	}

	return pars;
}


module.exports = randomAlgorithm;
