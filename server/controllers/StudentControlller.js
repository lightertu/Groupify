var Student = require('../models/Student.js')

module.exports = {
	find: function(params, callback){
			Student.find(params, function(err, students){
				if(err){
					callback(err, null)
						return
				}

				callback(null, students)
			})
	},

	findById: function(id, callback){
		Student.find({"student_id": id}, function(err, students){
			if(err){
				callback(err, null)
				return
			}

			callback(null, students)
		})
	},

	create: function(params, callback){
		Student.create(params, function(err, students){
			if(err){
				callback(err, null)
				return
			}

			callback(null, students)
		})
	},

	update: function(id, params, callback){
		Student.findOneAndUpdate({"form": id},{$push: params}, function(err, students){
			if(err){
				callback(err, null)
				return
			}

			callback(null, students)
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