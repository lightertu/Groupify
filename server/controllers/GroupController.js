var Group = require('../models/Group.js')
var Students = require('../models/Student.js')
const nodemailer = require('nodemailer');
var greedy_algorithm_based_on_Time = require('../algorithms/greedy_algorithm').greedy_algorithm_based_on_Time;

module.exports = {
	find: function(params, callback){
			Group.find(params, function(err, group){
				if(err){
					callback(err, null)
						return
				}

				callback(null, group)
			})
	},

	findById: function(id, callback){
		Group.find({"form": id}, function(err, group){
			if(err){
				callback(err, null)
				return
			}
			group[0].students.shift()

			group[0].students = group[0].students.map(function(item) {
				return item[0];
			})
			// algorithm goes here
			console.log(group[0].students)
			console.log("groupCapacity", group[0].groupCapacity)
			if(group.[0].students.length > 3) {
			let successRate = greedy_algorithm_based_on_Time(group[0].students, group[0].groupCapacity) 
			console.log("succes rate: ", successRate)
			} else {
				console.log('Not enough user responses')
			}
			callback(null, group)
		})
	},

	create: function(params, callback){

			Students.findById(params.students, function(err, students){
				if(err){
					callback(err, null)
					return
				}

				params.totalCapacity = students.students.length;
					Group.create(params, function(err, group){
						if(err){
						callback(err, null)
						return
						}

				console.log(students)
				let transporter = nodemailer.createTransport({
					service: 'gmail',
					auth: {
						user: '422apptest@gmail.com',
						pass: 'thebest101'
					}
				});

				let mailOptions = {
					from: '"Joseph Livni" <jdlivni@gmail.com>',
					to: students.students.map(student => { return student.email }),
					subject: 'Hello Class',
					text: ' Hello Class! Here is a link to the survey. localhost:3000/survey/'+params.form,
				}

				transporter.sendMail(mailOptions, (err, info) => {
					if(err) {
						callback(err, null)
						return
					}
					console.log("email succesfully sent")
					callback(null, info)
				})
			})
		})
	},

	update: function(id, params, callback){
		Group.findOneAndUpdate({"form": id},{$push: params}, function(err, group){
			if(err){
				callback(err, null)
				return
			}

			callback(null, group)
		})
	},

	delete: function(id, callback){
		Group.findByIdAndRemove(id, function(err){
			if(err){
				callback(err, null)
				return
			}

			callback(null, null)
		})
	}
}