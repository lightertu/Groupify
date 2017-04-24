var GroupController = require('./GroupController')
var EmailController = require('./EmailController')
var StudentController = require('./StudentController')

module.exports = {
	groups: GroupController,
	email: EmailController,
	students: StudentController
}