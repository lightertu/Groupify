var mongoose = require('mongoose')

var GroupSchema = new mongoose.Schema({
	form: {type:String, default: null},
	students: {type:Array, default: []},
	color: {type:String, default: 'blue'},
	timestamp: {type:Date, default:Date.now},
	title: {type:String, default: ''},
	success: {type:Number, default: -1}
})

module.exports = mongoose.model('GroupSchema', GroupSchema)

