var express = require('express')
var router = express.Router()
var controllers = require('../controllers') // gets index.js

router.get('/:resource', function(req, res, next){
		
	var resource = req.params.resource
	var controller = controllers[resource]

	if(controller == null){
		res.json({
			conirmation: 'fail',
			message: 'Invalid Resource Request: '+resource
		})
	}

	controller.find(req.query, function(err, results){
		if(err){
				res.json({
					confirmation: 'fail',
					message: err
				})

				return
		}

		res.json({
			confirmation: 'success',
			results: results
		})
	})
	
})

router.get('/:resource/:id', function(req, res, next){
	var resource = req.params.resource
	var id = req.params.id
	var controller = controllers[resource]

	if(controller == null){
		res.json({
			conirmation: 'fail',
			message: 'Invalid Resource Request: '+resource
		})
	}
	controller.findById(id, function(err, results){
		if(err){
			res.json({
				confirmation: 'fail',
				message: 'Not Found'
			})

			return
		}

		res.json({
			confirmation: 'success',
			result: result
		})
	})
})

router.post('/:resource', function(req, res, next){
	var resource = req.params.resource
	var controller = controllers[resource]

	if(controller == null){
		res.json({
			conirmation: 'fail',
			message: 'Invalid Resource Request: '+resource
		})
	}

	controller.create(req.body, function(err, result){
		if(err){
			res.json({
				confirmation: 'fail',
				message: err
			})

			return
		}

		res.json({
			confirmation: 'success',
			result: result
		})
	})
})

module.exports = router