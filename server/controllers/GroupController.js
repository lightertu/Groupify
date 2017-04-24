var Group = require('../models/Group.js')
const nodemailer = require('nodemailer');

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

			callback(null, group)
		})
	},

	create: function(params, callback){
		Group.create(params, function(err, group){
			if(err){
				callback(err, null)
				return
			}
			
			let transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: '422apptest@gmail.com',
					pass: 'thebest101'
				}
			});

			let mailOptions = {
				from: '"Joseph Livni" <jdlivni@gmail.com>',
				to: params.students.students.map(student => { return student.email }),
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