class ErrorApi  {

     constructor (code,msg ) {
    this.code = code
    this.msg = msg
    
 }
   static badRequest(msg) {
        return new ErrorApi(400, msg)
    }
    static internal(msg) {
        return new ErrorApi(500, msg)
    }
    static NOT_FOUND(msg) {
        return new ErrorApi(404, msg)
    }
}

module.exports = ErrorApi;