let GroupController = require('./GroupController');
let EmailController = require('./EmailController');
let StudentController = require('./StudentController');
let StudentGroupUpdateController  = require('./StudentGroupUpdateController');

module.exports = {
	groups: GroupController,
	email: EmailController,
	students: StudentController,
	studentUpdate: StudentGroupUpdateController
};