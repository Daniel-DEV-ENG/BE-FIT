const httpStatusCodes = require('./httpStatusCodes')
const BaseError = require('./ErrorApi')

class Api404Error extends BaseError {
 constructor (
 name,
 statusCode = httpStatusCodes.NOT_FOUND,
 description = 'Not found.',
 isOperational = true
 ) {
 super(name, statusCode, isOperational, description)
 }
}

module.exports = Api404Error