const { checkSchema } = require('express-validator')

const {
	usernameSchema,
	emailSchema,
	passwordSchema,
	fullnameSchema,
} = require('../schema/standalone')

exports.registerSchema = checkSchema(
	{
		email: emailSchema,
		password: passwordSchema,
		username: usernameSchema,
		fullname: fullnameSchema,
	},
	['body']
)

exports.loginSchema = checkSchema(
	{
		email: emailSchema,
		password: {
			notEmpty: {
				bail: true,
				errorMessage: 'Password is required',
			},
		},
	},
	['body']
)

exports.verifySchema = checkSchema({
	token: {
		in: 'params',
		exists: {
			bail: true,
			errorMessage: 'Token is required',
		},
		isLength: {
			options: { min: 64, max: 64 },
			bail: true,
			errorMessage: 'Token must be 64 characters long',
		},
		matches: {
			options: /^[0-9a-f]{64}$/,
			bail: true,
			errorMessage: 'Token must be a valid hex string',
		},
	},
})

exports.resendVerificationSchema = checkSchema(
	{
		email: emailSchema,
	},
	['body']
)

exports.forgotPasswordSchema = checkSchema(
	{
		email: emailSchema,
	},
	['body']
)

exports.resetPasswordSchema = checkSchema(
	{
		password: passwordSchema,
	},
	['body']
)
