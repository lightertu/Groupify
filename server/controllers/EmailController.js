'use strict';
let Student = require('../models/Participant.js');
const nodemailer = require('nodemailer');

module.exports = {
	find: function(params, callback){
			Student.find(params, function(err, group){
			if(err){
				callback(err, null);
					return
			}

			callback(null, group)
		})
	},

	findById: function(id, callback){
		callback("email API does not have this functionality", null);
		return
	},

	create: function(params, callback){
		// Student.find(params, function(err, students){
		// 	if(err){
		// 		callback(err, null)
		// 			return
		// 	}

			// create reusable transporter object using the default SMTP transport
			console.log("students", params);
			let transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: '422apptest@gmail.com',
					pass: 'thebest101'
				}
			});

			let mailOptions = {
				from: '"Joseph Livni" <jdlivni@gmail.com>',
				to: params.students.map(student => { return student.email }),
				subject: 'Hello Class',
				text: ' Hello Class! Here is a link to the survey. ',
			}

			transporter.sendMail(mailOptions, (err, info) => {
				if(err) {
					callback(err, null);
					return
				}
				console.log("email succesfully sent");
				callback(null, info)
			})
		//})

	},

	update: function(id, params, callback){
		callback("email API does not have this functionality", null);
		return
	},

	delete: function(id, callback){
		callback("email API does not have this functionality", null);
		return
	}
};