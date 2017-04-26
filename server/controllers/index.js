var GroupController = require('./GroupController')
var EmailController = require('./EmailController')
var StudentController = require('./StudentController')
var StudentGroupUpdateController  = require('./StudentGroupUpdateController')

module.exports = {
	groups: GroupController,
	email: EmailController,
	students: StudentController,
	studentUpdate: StudentGroupUpdateController
}