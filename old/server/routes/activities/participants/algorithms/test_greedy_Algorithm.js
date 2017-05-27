/*
Author: Kai Huang
Email: huangkai2518@gmail.com
*/
var greedy_algorithm_based_on_Time = require('./greedy_algorithm').greedy_algorithm_based_on_Time;
var generateUsers = require('./RandomUserGenerator').generateUsers;

var NumOfIterators  = 1000; // how many times you want to iterate
var NumOfPeople  	= 50;   // for each time, how many number of people you want to test with
var SizeOfGroups 	= 3;    // for each time and each group, how big you want the group to be? Group of 3? or Group of 4?
var TimeSlots 		= 30;   // How do you define the time.
var FreeTimeRate  	= 40;   // We have five days on Weekdays. If we are free on three of them, then the FreeTime rate is 3/5.

/*
This function will iterate multiple times to generate users with random free times and to run algorithm to group them. 
For each time, it will print the number of times and the success rate of the grouping schema.
Input explanation:
	NumOfIterators -> how many times you want to iterate
	NumOfPeople    -> for each time, how many number of people you want to test with
	SizeOfGroups   -> for each time and each group, how big you want the group to be?
	TimeSlots      -> How do you define the time. 
	FreeTimeRate   -> We have five days on Weekdays. If we are free on three of them, then the FreeTime rate is 3/5.

*/
function Test_Mutiple_Times(NumOfIterators, NumOfPeople, SizeOfGroups, TimeSlots, FreeTimeRate){
	console.log("\"Num\", \"Success Rate\"");
	for (let i=0; i<NumOfIterators; i++){
		let input = generateUsers(1, NumOfPeople, FreeTimeRate, TimeSlots);
		let succRate = greedy_algorithm_based_on_Time(input, SizeOfGroups);
		console.log(i+1 + ", " + succRate*100);
	}
}

// Similar to the function above. But this function only iterate for one time. That means it will just generate users and group them, print the success rate. That's all 
function Test_For_Only_One_Time(NumOfPeople, SizeOfGroups, TimeSlots, FreeTimeRate){
	let input = generateUsers(1, NumOfPeople, FreeTimeRate, TimeSlots);
	let succRate = greedy_algorithm_based_on_Time(input, SizeOfGroups);
	console.log(succRate*100 + "%");
}


// Test_For_Only_One_Time(NumOfPeople, SizeOfGroups, TimeSlots, FreeTimeRate);
Test_Mutiple_Times(NumOfIterators, NumOfPeople, SizeOfGroups, TimeSlots, FreeTimeRate);
	


