var mongoose = require('mongoose')

var StudentSchema = new mongoose.Schema({
	group: {type:Number, default: -1},
	students: {type:Array, default: []},
	survey: {type:Number, default: -1},
	timestamp: {type:Date, default:Date.now},
	success: {type:Number, default: -1}
})

module.exports = mongoose.model('StudentSchema', StudentSchema)