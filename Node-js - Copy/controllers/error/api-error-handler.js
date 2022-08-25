const ErrorApi = require('./ErrorApi')
function ApiErrorHandler(err, req, res, next) {
    console.error(err)

    if (err instanceof ErrorApi) {
        res.status(err.code).json(err.msg)
        return;
    }

   // res.status(500).json('something went wrong :( ')
}
module.exports = ApiErrorHandler