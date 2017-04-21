var mongoose = require('mongoose')

var StudentSchema = new mongoose.Schema({
	students: {type:Array, default: []},
})

module.exports = mongoose.model('StudentSchema', StudentSchema)