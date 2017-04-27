let Group = require('../models/Group.js')

module.exports = {
	find: function(params, callback){
		callback("participant API does not have this functionality", null);
		return
	},

	findById: function(id, callback){
		callback("participant API does not have this functionality", null);
		return
	},

	create: function(params, callback){
		callback("participant API does not have this functionality", null);
		return
	},

	update: function(id, params, callback){
		Group.find({"form": id},{students: 1}, function(err, students){
			if(err){
				callback(err, null);
				return
			}
			students = students[0].students;
			let idx = params.idx;
			students[idx][0].groupNumber = params.groupNumber;
			let tmp = students[idx];
			students.splice(idx, 1);
			students.push(tmp);

			Group.update({"form":id}, {"students": students}, function(err, student){
				if(err){
				callback(err, null);
				return
				}
			})
			callback(null, students)
		})
	},

	delete: function(id, callback){
		callback("participant API does not have this functionality", null);
		return
	}
}