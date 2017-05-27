/*
Author: Kai Huang
Email: huangkai2518@gmail.com
*/

// //default size of group
// let defaultSize = 3;
/*
Input and output are  array. If input is not array, return [].
Input example:
[{id: 1, groupNumber: -1}, {id:2, groupNumber:-1}]
*/

exports.randomAlgorithm = randomAlgorithm;
exports.getRandomNum	= getRandomNum;
exports.getGroupList    = getGroupList;


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

function randomAlgorithm(input, size)
{
	if (!Array.isArray(input)){
		return [];
	}
	let sLength = input.length;
	let groupNum = Math.floor(sLength/size);

	//there will be r group with size one more than default size.
	let rest = input.length%size;

	let groupList = getGroupList(groupNum, rest, size);
	let groupIndex =[];
	for (let i=0; i<groupNum; i++){
		groupIndex[i] = i;
	}

	for (let j=0; j<sLength; j++){
		let num = getRandomNum(0, groupList.length-1);
		input[j].groupNumber = groupIndex[num];
		groupList[num] -= 1;
		if (groupList[num] == 0){
			groupList.splice(num, 1);
			let k = num;
			while (k < groupIndex.length-1){
				groupIndex[k] = groupIndex[k+1];
				k++;
			}
		}

	}

	return input;
}
