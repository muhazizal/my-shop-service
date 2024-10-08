const { validationResult } = require('express-validator')

exports.validateRequest = (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		throw res.status(422).json({
			message: 'Invalid request',
			data: errors.array(),
			code: 422,
		})
	}
}
exports.validateNoteExist = (note) => {
	if (!note) {
		const error = new Error('Note is not found')
		error.statusCode = 404
		throw error
	}
}
