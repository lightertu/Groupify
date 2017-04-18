var Group = require('../models/Group.js')

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
		Group.findById(id, function(err, group){
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

			callback(null, group)
		})
	},

	update: function(id, params, callback){
		Group.findByIdAndUpdate(id, params, {new:true}, function(err, group){
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