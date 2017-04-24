// var randomAlgorithm = require('./randomAlgorithm').randomAlgorithm;
// var Std = require('./greedy_algorithm').Std;
// var clCompare = require('./greedy_algorithm').clCompare;
// var createList = require('./greedy_algorithm').createList;
// var msSortTwoList = require('./greedy_algorithm').msSortTwoList;
// var msSplit = require('./greedy_algorithm').msSplit;
// var mergeSort = require('./greedy_algorithm').mergeSort;
// var contain = require('./greedy_algorithm').contain;
// var min = require('./greedy_algorithm').min;
// var minPartners = require('./greedy_algorithm').minPartners;
// var addRestStd = require('./greedy_algorithm').addRestStd;
// var order = require('./greedy_algorithm').order;
// var removePotential = require('./greedy_algorithm').removePotential;
// var match = require('./greedy_algorithm').match;
var greedy_algorithm_based_on_Time = require('./greedy_algorithm').greedy_algorithm_based_on_Time;


// var names = require('./RandomUserGenerator').names;
// var images = require('./RandomUserGenerator').images;
// var skills = require('./RandomUserGenerator').skills;
// var skillLevel = require('./RandomUserGenerator').skillLevel;
// var guid = require('./RandomUserGenerator').guid;
// var randomBetween = require('./RandomUserGenerator').randomBetween;
// var pickName = require('./RandomUserGenerator').ickName;
// var pickImage = require('./RandomUserGenerator').pickImage;
// var pickGroup = require('./RandomUserGenerator').pickGroup;
// var pickSkills = require('./RandomUserGenerator').pickSkills;
// var pickAvailability = require('./RandomUserGenerator').pickAvailability;
var generateUsers = require('./RandomUserGenerator').generateUsers;


var size = 3;
var num  = 50;

// console.log(input);
// console.log();

console.log("\"Num\", \"successRate\"")
for (let i=0; i<1000; i++){
	let input = generateUsers(size,num);
	let succRate = greedy_algorithm_based_on_Time(input, size);
	console.log((i+1)+ "," +succRate*100);
}

// console.log(input);

