var mongoose = require('mongoose')

var GroupSchema = new mongoose.Schema({
	form: {type:String, default: null},
	students: {type:Array, default: []},
	color: {type:String, default: 'blue'},
	timestamp: {type:Date, default:Date.now},
	title: {type:String, default: ''},
	questions: {type:Array, default: []}
})

module.exports = mongoose.model('GroupSchema', GroupSchema)

