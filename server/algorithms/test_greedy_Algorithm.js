/*
Author: Kai Huang
Email: huangkai2518@gmail.com
*/


var greedy_algorithm_based_on_Time = require('./greedy_algorithm').greedy_algorithm_based_on_Time;
var generateUsers = require('./RandomUserGenerator').generateUsers;


var size 	= 3;
var num  	= 50;
var pos  	= 40;
var dayTime = 30;

var times = 1000;

// console.log("\"Possibility\", \"Mean of the Success Rate\"")
// for (let p=25; p<75; p++){
// 	let sum = 0;
// 	for (let i=0; i<times; i++){
// 		let input = generateUsers(size,num, p, dayTime);
// 		let succRate = greedy_algorithm_based_on_Time(input, size);
// 		sum += succRate;
// 	}
// 	console.log(p + ", " + sum/times*100)

// }

console.log("\"Num\", \"Success Rate\"");
for (let i=0; i<times; i++){
	let input = generateUsers(size,num, pos, dayTime);
	let succRate = greedy_algorithm_based_on_Time(input, size);
	console.log(i + ", " + succRate*100);
}


	


