'use strict';
const nodemailer = require('nodemailer');

module.exports = {
	find: function(params, callback){
			callback("email API does not have this functionality", null);
			return
	},

	findById: function(id, callback){
		callback("email API does not have this functionality", null);
		return
	},

	create: function(params, callback){
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'jdlivni@gmail.com',
				pass: 'booger103'
			}
		});

		let mailOptions = {
			from: '"Joseph Livni" <jdlivni@gmail.com>',
			to: params.students.toString(),
			subject: 'Hello Class',
			text: ' Hello Class! Here is a link to the survey. ' + params.survey,
		}

		transporter.sendMail(mailOptions, (err, info) => {
			if(err) {
				callback(err, null)
				return
			}

			callback(null, info)
		})


	},

	update: function(id, params, callback){
		callback("email API does not have this functionality", null);
		return
	},

	delete: function(id, callback){
		callback("email API does not have this functionality", null);
		return
}